import { css, styled } from "solid-styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.button<{ noButton: boolean }>`
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
    outline: 2px solid white;
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
