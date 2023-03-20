import { styled } from "solid-styled-components";

export const AsideMenuWrapper = styled.aside`
  height: 100%;
  width: 64px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${(p) => p.theme?.colors.borderColor};
  justify-content: space-evenly;
`;

export const Item = styled.button<{ active?: boolean }>`
  /* all: unset; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  color: white;

  background: ${(p) => (p.active ? p.theme?.colors.borderColor : p.theme?.colors.bg)};
  transition: ${(p) => p.theme?.transitions.default};

  cursor: pointer;

  & + & {
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor};
  }

  svg {
    font-size: 24px;
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
