import { Component, JSX, Show, createSignal, onMount } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useNavigate, useParams } from "@solidjs/router";
import { useToast } from "../../hooks/useToast";
import useVideos, { VideoData } from "../../hooks/useVideos";
import { createStore } from "solid-js/store";
import { EditableTitle } from "../../components/EditableTitle";

const EditNoteView: Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  const toast = useToast();
  const { getNoteById } = useVideos();
  const note = getNoteById(params.id);

  const [title, setTitle] = createSignal(note?.title);
  const [noteText, setNoteText] = createSignal(note?.text);
  const { convertTime, updateNote } = useVideos();

  let titleRef: HTMLTextAreaElement | undefined;

  onMount(async () => {
    titleRef?.focus();
  });

  function handleSaveNote() {
    if (title() === "" || noteText() === "") {
      toast.error("Note cannot be empty");
      return;
    }
    updateNote({
      ...note,
      title: title()!,
      text: noteText()!,
    });

    toast.info("Note updated");
    // saveNote({
    //   text: noteText(),
    //   title: title(),
    //   time: videoData.time,
    //   url: videoData.url,
    //   thumbnail: videoData.thumbnail,
    // });
  }

  // const location = useLocation();

  if (!note) {
    toast.error("Note not found");
    navigate("/list");
  }
  return (
    <Styles.EditNoteViewWrapper>
      <Styles.TitleContainer>
        <EditableTitle
          ref={titleRef}
          value={title()}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Show when={note?.time}>
          <Styles.Timer>
            <ClockIcon size={28} />
            <span>{convertTime(note?.time)}</span>
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
    </Styles.EditNoteViewWrapper>
  );
};

export { EditNoteView };
