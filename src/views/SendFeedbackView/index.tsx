import { Component, onMount } from "solid-js";
import * as Styles from "./styles";
import { TextArea } from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { useToast } from "../../hooks/useToast";
import { useLoading } from "../../hooks/useLoading";

const SendFeedbackView: Component = () => {
  const toast = useToast();
  const [text, setText] = createSignal("");
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  let textAreaRef: HTMLTextAreaElement | undefined;

  onMount(() => {
    textAreaRef?.focus();
  });

  async function handleSendFeedback() {
    try {
      if (text().length < 10) {
        toast.error("Please write a message with at least 10 characters.");
        return;
      }

      setIsLoading(true);

      await fetch("https://receive-feedback-from-videoextension.vercel.app/send-feedback", {
        method: "POST",
        body: JSON.stringify({ message: text() }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.info("Thank you for your feedback! 💜");
      navigate("/settings");
      setIsLoading(false);
    } catch (error) {
      toast.error("Error sending feedback, please try again later.");
    }
  }

  return (
    <Styles.SendFeedbackWrapper>
      <h1 style={{ "font-weight": "300" }}>Write your message</h1>
      <p>don't worry, it is anonymously</p>
      <TextArea
        ref={textAreaRef}
        value={text()}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Styles.ButtonsContainer>
        <Button noButton style={{ height: "36px" }} onClick={() => navigate("/settings")}>
          CANCEL
        </Button>
        <Button style={{ height: "36px" }} onClick={handleSendFeedback}>
          SEND
        </Button>
      </Styles.ButtonsContainer>
    </Styles.SendFeedbackWrapper>
  );
};

export { SendFeedbackView };
