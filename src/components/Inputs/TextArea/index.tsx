import React from "react";
import * as Styles from "./styles"

export default function TextArea() {
  return (
    <Styles.TextAreaContainer>
      <Styles.TextArea maxLength={1000}></Styles.TextArea>
    </Styles.TextAreaContainer>
  );
}
