import { db } from "../service/firebase";
import { useLoading } from "./useLoading";
import {
  FirestoreError,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useToast } from "./useToast";
import { useAuth } from "./useAuth";
import { useNavigate } from "@solidjs/router";
import {
  JSX,
  Resource,
  createContext,
  createEffect,
  createResource,
  createSignal,
  useContext,
} from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

export interface VideoData {
  title: string;
  thumbnail?: string;
  time?: number;
  url: string;
}

export interface NoteData extends VideoData {
  id?: string;
  text: string;
}

interface VideosContextData {
  notes: Resource<NoteData[] | undefined>;
  setNotes: SetStoreFunction<NoteData[]>;
  getVideoInfoFromTab: () => Promise<VideoData>;
  convertTime: (time?: number) => string | undefined;
  saveNote: (note: NoteData) => void;
  refetch: (info?: unknown) => NoteData[] | Promise<NoteData[] | undefined> | null | undefined;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => NoteData | undefined;
}

const VideosContext = createContext({} as VideosContextData);

export function VideosProvider(props: { children: JSX.Element }) {
  const { isLoading, setIsLoading } = useLoading();
  const toast = useToast();
  const { user } = useAuth();
  const ref = collection(db, "notes");
  const [notes, { mutate: setNotes, refetch }] = createResource(
    () => user?.id,
    async () => {
      if (!user?.id) return;
      setIsLoading(true);
      console.log("fetching notes");

      const userQuery = query(
        ref,
        orderBy("createdAt", "desc"),
        where("userId", "==", user?.id)
      );
      const notes = await getDocs(userQuery);

      setIsLoading(false);
      return notes.docs.map((doc) => ({ ...doc.data(), id: doc.id } as NoteData));
    }
  );
  const navigate = useNavigate();

  async function saveNote(note: NoteData) {
    try {
      if (!user?.id) return;
      setIsLoading(true);
      await addDoc(ref, {
        ...note,
        userId: user?.id || "",
        createdAt: new Date(),
      });

      refetch();

      // setNotes((prevNotes) => [...(prevNotes || []), itemToAdd]);

      toast.info("Note saved!");
    } catch (error) {
      if (error instanceof FirestoreError) {
        toast.error(error.code);
      }
    } finally {
      navigate("/");
      setIsLoading(false);
    }
  }

  function getNoteById(id: string) {
    return notes()?.find((note) => note.id === id);
  }

  async function getVideoInfoFromTab(): Promise<VideoData> {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        const video = document.querySelector("video");
        const time = video?.currentTime;
        let thumbnail;

        if (video) {
          const canvas = document.createElement("canvas");
          canvas.width = 90;
          canvas.height = 90;
          const canvasContext = canvas.getContext("2d");
          canvasContext?.drawImage(video, 0, 0, 90, 90);
          thumbnail = canvas.toDataURL("image/png");
        }

        return { time, thumbnail };
      },
    });

    return {
      title: tab.title!,
      thumbnail: result[0].result.thumbnail,
      time: result[0].result.time,
      url: tab.url!,
    };
  }

  function convertTime(time?: number) {
    if (!time) return undefined;

    let timeString = "";

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    const secondsString = seconds < 10 ? `0${seconds}` : seconds;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const hoursString = hours < 10 ? `0${hours}` : hours;

    timeString = `${minutesString}:${secondsString}`;

    if (hours > 0) {
      timeString = `${hoursString}:${timeString}`;
    }

    return timeString;
  }

  async function deleteNote(id: string) {
    toast.info(id);
    //const noteToDelette = collection(db, "notes.id", id);

    // console.log(noteToDelette);

    console.log(doc(db, "notes", id));

    const refNote = doc(db, "notes", id);

    await deleteDoc(refNote);

    //await deleteDoc(doc(db, "notes", id));
    refetch();
  }

  return (
    <VideosContext.Provider
      value={{
        notes,
        getNoteById,
        setNotes,
        convertTime,
        getVideoInfoFromTab,
        saveNote,
        refetch,
        deleteNote,
      }}
    >
      {props.children}
    </VideosContext.Provider>
  );
}

export default function useVideos() {
  const context = useContext(VideosContext);
  return context;
}
