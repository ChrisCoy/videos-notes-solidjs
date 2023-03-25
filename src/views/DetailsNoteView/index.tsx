import { Component } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineClockCircle as ClockIcon } from "solid-icons/ai";
import TextArea from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { useNavigate } from "@solidjs/router";

const DetailsNoteView: Component = () => {
  const navigate = useNavigate();

  return (
    <Styles.DetailsNoteViewWrapper>
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
          CANCEL
        </Button>
        <Button style={{ height: "36px" }}>SAVE</Button>
      </Styles.ButtonsContainer>
    </Styles.DetailsNoteViewWrapper>
  );
};

export { DetailsNoteView };
