import { Component, Show, createEffect, onMount } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { EditableTitle } from "../../components/EditableTitle";
import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import useVideos, { VideoData } from "../../hooks/useVideos";
import { createStore } from "solid-js/store";
import { useToast } from "../../hooks/useToast";

const CreateNoteView: Component = () => {
  const toast = useToast();
  const [title, setTitle] = createSignal("");
  const [noteText, setNoteText] = createSignal("");
  const [videoData, setVideoData] = createStore<VideoData>({} as VideoData);
  const { getVideoInfoFromTab, convertTime, saveNote } = useVideos();
  const navigate = useNavigate();

  let titleRef: HTMLTextAreaElement | undefined;

  onMount(async () => {
    titleRef?.focus();
    try {
      const videoInfo = await getVideoInfoFromTab();
      setVideoData(videoInfo);
      setTitle(videoInfo.title);
    } catch (error) {
      toast.error("Cannot create note from this page");
      navigate("/list");
    }
  });

  async function handleSaveNote() {
    try {
      await saveNote({
        text: noteText(),
        title: title(),
        time: videoData.time,
        url: videoData.url,
        thumbnail: videoData.thumbnail,
      });
    } catch (error) {
      toast.error("Note cannot be empty");
    }
  }

  return (
    <Styles.CreateNoteWrapper>
      <Styles.TitleContainer>
        <EditableTitle
          ref={titleRef}
          value={title()}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Show when={videoData.time}>
          <Styles.Timer>
            <ClockIcon size={28} />
            <span>{convertTime(videoData.time)}</span>
          </Styles.Timer>
        </Show>
      </Styles.TitleContainer>
      <TextArea value={noteText()} onChange={(e) => setNoteText(e.currentTarget.value)} />
      <Styles.ButtonsContainer>
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/list")}>
          CANCEL
        </Button>
        <Button style={{ height: "36px" }} onClick={handleSaveNote}>
          SAVE
        </Button>
      </Styles.ButtonsContainer>
    </Styles.CreateNoteWrapper>
  );
};

export { CreateNoteView };
