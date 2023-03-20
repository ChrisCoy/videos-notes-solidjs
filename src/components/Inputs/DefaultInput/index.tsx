import { createEffect, createSignal, JSX, Show } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineEye } from "solid-icons/ai";
import { AiTwotoneEyeInvisible } from "solid-icons/ai";

interface DefaultInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string;
  class?: string;
  icon: JSX.Element;
  // error: {
  //   error: string;
  //   touched: boolean;
  // };
}

export const DefaultInput = (props: DefaultInputProps) => {
  const [isVisible, setIsVisible] = createSignal(false);

  // createEffect(() => {
  //   console.log(!props.isPassword || isVisible() ? "text" : "pw");
  // });

  console.log(isVisible() && props.type === "password" ? "text" : "password");
  console.log(props.type === "password");
  console.log(isVisible());

  const fieldType = () => (!isVisible() && props.type === "password" ? "password" : "text");

  // setInterval(() => {
  //   // console.log("teaste");

  //   setIsVisible(!isVisible());
  // }, 1000);

  return (
    // <Styles.Wrapper className={className} error={error.error && error.touched ? true : false}>
    <Styles.Wrapper class={props.class}>
      <span>{props.icon}</span>
      <input {...props} id={props.inputLabel} name={props.inputLabel} type={fieldType()} />
      <label for={props.inputLabel}>{props.inputLabel}</label>
      <Show when={props.type === "password"}>
        <Show when={isVisible()}>
          <AiTwotoneEyeInvisible
            size={20}
            onclick={() => setIsVisible(!isVisible())}
            class="eye-icon"
          />
        </Show>
        <Show when={!isVisible()}>
          <AiOutlineEye
            size={20}
            onclick={() => setIsVisible(!isVisible())}
            class="eye-icon"
          />
        </Show>
      </Show>
      {/* {error.error && error.touched && <span>{error.error}</span>} */}
    </Styles.Wrapper>
  );
};
