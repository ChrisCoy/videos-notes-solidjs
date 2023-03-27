import { styled } from "solid-styled-components";

export const TextAreaContainer = styled.div`
  width: 96%;
  border-radius: 5px;
  overflow: hidden !important;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 180px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: none;
  background: #d1d1d1;
  color: #2a2a2a;
  font-size: 16px;

  font-family: ${(p) => p.theme?.fonts.default};

  &:focus {
    box-shadow: 0px 0px 0px 1px ${(p) => p.theme?.colors.blue} inset;
  }
`;
