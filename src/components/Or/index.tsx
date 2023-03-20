import { Component, JSX } from "solid-js";
import * as Styles from "./styles";

interface OrProps {
  class?: string;
}

const Or: Component<OrProps> = (props: OrProps) => {
  return (
    <Styles.OrWrapper class={props.class}>
      <span>OR</span>
      <i />
    </Styles.OrWrapper>
  );
};

export { Or };
