import { JSX } from "solid-js";
import * as Styles from "./styles";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  noButton?: boolean;
  style?: JSX.CSSProperties;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, noButton = false, style } = props;

  return (
    <Styles.Wrapper {...props} noButton={noButton} onClick={onClick} style={style}>
      {children}
    </Styles.Wrapper>
  );
}
