import { Component, JSX } from "solid-js";
import * as Styles from "./styles";

interface EditableTitleProps extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  class?: string;
}

const EditableTitle: Component<EditableTitleProps> = (props: EditableTitleProps) => {
  return <Styles.EditableTitleWrapper contentEditable maxlength="100" {...props} />;
};

export { EditableTitle };
