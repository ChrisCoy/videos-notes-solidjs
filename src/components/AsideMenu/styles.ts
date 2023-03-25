import { styled } from "solid-styled-components";
import { BREAKPOINTS } from "../../styles/theme";

export const AsideMenuWrapper = styled.aside`
  height: 100%;
  min-width: 64px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${(p) => p.theme?.colors.borderColor};
  justify-content: space-evenly;

  @media (max-width: ${BREAKPOINTS.small}) {
    position: fixed;
    bottom: 0;
    width: 100%;
    flex-direction: row;
    height: 3rem;
  }
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
  transition: background 0.3s ease-in-out;

  cursor: pointer;

  border: 1px solid ${(p) => (p.active ? p.theme?.colors.borderColor : p.theme?.colors.bg)};

  & + & {
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor};
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: ${BREAKPOINTS.small}) {
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor};
  }

  &:hover {
    filter: brightness(1.5);
  }
`;
