import styled from "styled-components";
import { theme } from "../../../utils/constants";

export const TextAreaContainer = styled.div`
  width: 96%;
  border-radius: 20px;
  overflow: hidden !important;
`;

export const TextArea = styled.textarea`
  resize: none;
  height: 210px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  outline: none;
  border: none;
  background: #d1d1d1;
  color: #2a2a2a;
  font-size: 16px;

  &:focus {
    box-shadow: 0px 0px 0px 1px ${theme.blue} inset;
  }
`;
