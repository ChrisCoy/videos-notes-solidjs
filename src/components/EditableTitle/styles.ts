import { styled } from "solid-styled-components";

export const EditableTitleWrapper = styled.textarea`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 4rem;
  font-size: 1.4rem;
  font-weight: 500;
  background: transparent;
  color: white;
  border: 1px solid transparent;
  outline: none;
  box-shadow: none;
  padding-right: 0.4rem;
  padding-bottom: 0.4rem;
  margin-bottom: -0.7rem;
  font-family: ${(p) => p.theme?.fonts.default};
  resize: none;
`;
