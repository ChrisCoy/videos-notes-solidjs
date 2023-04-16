import { Component, JSX } from "solid-js";
import * as Styles from "./styles";

interface TextAreaProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  class?: string;
}

export const TextArea: Component<TextAreaProps> = (props) => {
  return (
    <Styles.TextAreaContainer>
      <Styles.TextArea {...props} maxLength={1000}></Styles.TextArea>
    </Styles.TextAreaContainer>
  );
};
