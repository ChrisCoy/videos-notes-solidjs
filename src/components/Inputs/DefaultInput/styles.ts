import { styled } from "solid-styled-components";
import { theme } from "../../../styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 4px;
  position: relative;

  label {
    font-size: 13px;
  }

  .eye-icon {
    position: absolute;
    top: 50%;
    right: 0.6rem;
    color: #777 !important;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 50%;
    left: 0.6rem;
    color: #777;
    font-size: 1.2rem;
    z-index: 2;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    padding: 0 8px;
    padding-left: 2.4rem;

    margin: 0 !important;

    color: #444;

    &:focus {
      outline: 2px solid ${theme.colors.blue};

      & ~ label {
        color: ${theme.colors.blue};
      }
    }
  }
`;

/* outline: 2px solid ${(p) => (p.error ? "#F42424" : theme.colors.bg)}; */
