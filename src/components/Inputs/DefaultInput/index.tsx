import { createEffect, createSignal, JSX, Show } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineEye } from "solid-icons/ai";
import { AiTwotoneEyeInvisible } from "solid-icons/ai";

interface DefaultInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string;
  class?: string;
  icon: JSX.Element;
  idAndName: string;
  // error: {
  //   error: string;
  //   touched: boolean;
  // };
}

export const DefaultInput = (props: DefaultInputProps) => {
  const [isVisible, setIsVisible] = createSignal(false);

  const fieldType = () => (!isVisible() && props.type === "password" ? "password" : "text");

  return (
    <Styles.Wrapper class={props.class}>
      <span>{props.icon}</span>
      <input {...props} id={props.idAndName} name={props.idAndName} type={fieldType()} />
      <label for={props.inputLabel}>{props.inputLabel}</label>
      <Show when={props.type === "password"}>
        <Show
          when={isVisible()}
          fallback={
            <AiOutlineEye
              size={20}
              onclick={() => setIsVisible(!isVisible())}
              class="eye-icon"
            />
          }
        >
          <AiTwotoneEyeInvisible
            size={20}
            onclick={() => setIsVisible(!isVisible())}
            class="eye-icon"
          />
        </Show>
      </Show>
    </Styles.Wrapper>
  );
};
