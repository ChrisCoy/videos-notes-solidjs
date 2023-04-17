import { Component, Show } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useLocation, useNavigate, useParams } from "@solidjs/router";
import useVideos from "../../hooks/useVideos";
import { useToast } from "../../hooks/useToast";

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

  function handleToVideo(id: string) {
    alert("rodei");
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
        <Button style={{ height: "36px" }} onClick={() => handleToVideo(note?.id!)}>
          GO TO VIDEO
        </Button>
      </Styles.ButtonsContainer>
    </Styles.DetailsNoteViewWrapper>
  );
};

export { DetailsNoteView };
