import { css, styled } from "solid-styled-components";
import { theme } from "../../styles/theme";

export const ButtonStyled = styled.button<{ noButton: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  margin: 0;
  padding: 0;

  cursor: pointer;

  transition: filter 0.3s;

  width: 100%;
  height: 40px;

  font-size: 16px;
  font-weight: 700;

  &:hover {
    filter: brightness(1.3);
  }

  &:active {
    /* outline: 2px solid white; */
    box-shadow: 0px 0px 0px 2px black, 0px 0px 0px 4px white;
    border-color: ${(p) => p.theme?.colors.bg};
    /* box-shadow: 0 0 10px 4px #0000ff, 0 0 20px 30px #008000, 30px 0 20px 30px #ff1493, */
    /* -30px -30px 20px 30px #ff4500; */
  }

  ${(p) =>
    p.noButton
      ? `
          background: ${theme.colors.bg};
          border: 1px solid #8b8b8b;
          color: #8b8b8b;
        `
      : `
          background: ${theme.colors.blue};
          color: ${theme.colors.bg};
          border: none;
        `}
`;
