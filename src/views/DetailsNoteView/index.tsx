import { Component, Show } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useLocation, useNavigate, useParams } from "@solidjs/router";
import useVideos, { NoteData } from "../../hooks/useVideos";
import { useToast } from "../../hooks/useToast";

function YouTubeGetID(url: any) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

const DetailsNoteView: Component = () => {
  const navigate = useNavigate();
  const { convertTime } = useVideos();
  // const location = useLocation();
  const params = useParams();
  const toast = useToast();
  const { getNoteById } = useVideos();
  const note = getNoteById(params.id);

  if (!note) {
    toast.error("Note not found");
    navigate("/");
  }

  console.log(note);

  async function handleToVideo(note: NoteData) {
    const videoRegExp = new RegExp("^(https?://)?((www.)?youtube.com|youtu.be)/.+$");

    const isValidVideoUrl = videoRegExp.test(note.url || "");

    if (isValidVideoUrl && note.time) {
      const urlToNavigate =
        "https://www.youtube.com/watch?v=" +
        YouTubeGetID(note.url) +
        "&t=" +
        Math.floor(note.time!);
      alert(urlToNavigate);
      await chrome.tabs.create({ url: urlToNavigate });
      return;
    }

    await chrome.storage.local.set({ noteStorage: JSON.stringify(note) });
    const result = await chrome.tabs.create({ url: note.url });

    chrome.scripting.executeScript({
      target: { tabId: result.id! },
      func: () => {
        chrome.storage.local.get(["noteStorage"]).then((result) => {
          const noteFromJson = JSON.parse(result.noteStorage);

          if (!noteFromJson.time) {
            return;
          }
          const now = new Date().getTime();
          const interval = setInterval(() => {
            console.log("lol");
            const video = document.querySelector("video") as HTMLVideoElement;
            if (video && video.currentTime) {
              video.currentTime = noteFromJson.time!;
              console.log(video);
              console.log(video.currentSrc);
              console.log(noteFromJson);

              console.log("lul");
              clearInterval(interval);
              return;
            }
            if (new Date().getTime() - now > 10000) {
              clearInterval(interval);
              return;
            }
          }, 300);
          console.log({ result });
        });
      },
    });

    return;

    // await chrome.scripting.executeScript({
    //   target: { tabId: result.`` },
    //   files: ["content.js"],
    //   world: "MAIN",
    // });

    // await chrome.scripting.executeScript({
    //   target: { tabId: result.id! },
    //   // func: () => {
    //   //   console.log("rodeiiiiiiiiiii aqui");

    //   //   chrome.storage.local.get("noteStorage", function (items) {
    //   //     console.log(items);

    //   //     // assignTextToTextareas(items.updateTextTo);
    //   //     chrome.storage.local.remove("updateTextTo");
    //   //   });

    //   //   // async function teste() {
    //   //   //   const noteStorage = await chrome.storage.sync.get("noteStorage");
    //   //   //   console.log(noteStorage);
    //   //   // }

    //   //   // teste();

    //   //   console.log("rodeiiiiiiiiiii dnovo");

    //   //   return;

    //   //   if (!noteStorage.time) {
    //   //     return;
    //   //   }
    //   //   const now = new Date().getTime();
    //   //   const interval = setInterval(() => {
    //   //     const video = document.querySelector("video") as HTMLVideoElement;
    //   //     if (video) {
    //   //       video.currentTime = noteStorage.time!;
    //   //       clearInterval(interval);
    //   //       return;
    //   //     }
    //   //     if (new Date().getTime() - now > 10000) {
    //   //       clearInterval(interval);
    //   //       return;
    //   //     }
    //   //   }, 300);
    //   // },
    //   // files: ["scripts/script.js"],
    // });

    // TODO - implementar a funcionalidade de ir para o video
  }

  return (
    <Styles.DetailsNoteViewWrapper>
      <Styles.TitleContainer>
        <h1>{note?.title}</h1>
        <Show when={note?.time}>
          <Styles.Timer>
            <ClockIcon size={28} />
            <span>{convertTime(note?.time)}</span>
          </Styles.Timer>
        </Show>
      </Styles.TitleContainer>
      <TextArea value={note?.text} disabled />
      <Styles.ButtonsContainer>
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/")}>
          BACK
        </Button>
        <Button style={{ height: "36px" }} onClick={() => handleToVideo(note!)}>
          GO TO VIDEO
        </Button>
      </Styles.ButtonsContainer>
    </Styles.DetailsNoteViewWrapper>
  );
};

export { DetailsNoteView };
