import { Component, JSX } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useNavigate } from "@solidjs/router";

const EditNoteView: Component = () => {
  const navigate = useNavigate();
  return (
    <Styles.EditNoteViewWrapper>
      <Styles.TitleContainer>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <Styles.Timer>
          <ClockIcon size={28} />
          <span>2:33</span>
        </Styles.Timer>
      </Styles.TitleContainer>
      <TextArea />
      <Styles.ButtonsContainer>
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/")}>
          BACK
        </Button>
        <Button style={{ height: "36px" }}>SAVE</Button>
      </Styles.ButtonsContainer>
    </Styles.EditNoteViewWrapper>
  );
};

export { EditNoteView };
