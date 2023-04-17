import { styled } from "solid-styled-components";

export const SettingsViewWrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  margin-right: -1rem;
  padding-right: 1rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  /* overflow: hidden; */

  & > *:where(:not(:first-child)) {
    /* background: red !important; */
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor} !important;
  }

  & > *:focus-visible {
    outline: none !important;
    box-shadow: inset 0px 0px 0px 2px #aaa !important;
    z-index: 1 !important;
  }
`;

export const MenuItem = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 1rem;
  font-size: 1.2rem;

  /* & + & {
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor};
  } */

  padding-block: 0.8rem;

  transition: ${(p) => p.theme?.transitions.default};

  cursor: pointer;

  /* border: ${(p) => p.theme?.colors.borderColor} 1px solid; */

  &:active {
    color: ${(p) => p.theme?.colors.blue} !important;
  }

  &:hover {
    z-index: 999;
    svg {
      transition: ${(p) => p.theme?.transitions.default};
      color: ${(p) => p.theme?.colors.blue} !important;
    }
  }

  svg {
    font-size: 2rem;
    /* color: ${(p) => p.theme?.colors.blue} !important; */
  }
`;

export const SendFileButton = styled(MenuItem)`
  position: relative;

  input {
    position: absolute;
    inset: 0;
    cursor: pointer;
    opacity: 0;
  }
`;

export const MadeWithLove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;

  padding-top: 1rem;
  border: none !important;

  a {
    all: unset;
    color: ${(p) => p.theme?.colors.blue};
    font-weight: ${(p) => p.theme?.fontWeights.bold};
    cursor: pointer;

    &:focus-visible {
      outline: none !important;
      box-shadow: inset 0px 0px 0px 2px #aaa !important;
      z-index: 1 !important;
    }
  }

  svg {
    color: #ba0bff !important;
  }
`;
