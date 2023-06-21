import { Component, Show } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useLocation, useNavigate, useParams } from "@solidjs/router";
import useVideos, { NoteData } from "../../hooks/useVideos";
import { useToast } from "../../hooks/useToast";

function youTubeGetID(url: any) {
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
    navigate("/list");
  }

  async function handleToVideo(note: NoteData) {
    const videoRegExp = new RegExp("^(https?://)?((www.)?youtube.com|youtu.be)/.+$");

    const isValidVideoUrl = videoRegExp.test(note.url || "");

    if (isValidVideoUrl && note.time) {
      const urlToNavigate =
        "https://www.youtube.com/watch?v=" +
        youTubeGetID(note.url) +
        "&t=" +
        Math.floor(note.time!);
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
            const video = document.querySelector("video") as HTMLVideoElement;
            if (video && video.currentTime) {
              video.currentTime = noteFromJson.time!;

              clearInterval(interval);
              return;
            }
            if (new Date().getTime() - now > 10000) {
              clearInterval(interval);
              return;
            }
          }, 300);
        });
      },
    });

    return;
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
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/list")}>
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
