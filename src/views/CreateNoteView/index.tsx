import { Component, createEffect } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import TextArea from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { EditableTitle } from "../../components/EditableTitle";
import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

const CreateNoteView: Component = () => {
  const [title, setTitle] = createSignal("Edit me");
  const navigate = useNavigate();
  return (
    <Styles.CreateNoteWrapper>
      <Styles.TitleContainer>
        <EditableTitle value={title()} onChange={(e) => setTitle(e.currentTarget.value)} />
        <Styles.Timer>
          <ClockIcon size={28} />
          <span>2:33</span>
        </Styles.Timer>
      </Styles.TitleContainer>
      <TextArea />
      <Styles.ButtonsContainer>
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/")}>
          CANCEL
        </Button>
        <Button style={{ height: "36px" }}>SAVE</Button>
      </Styles.ButtonsContainer>
    </Styles.CreateNoteWrapper>
  );
};

export { CreateNoteView };
