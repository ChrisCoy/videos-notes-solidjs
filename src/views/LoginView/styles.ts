import { styled } from "solid-styled-components";
import { BREAKPOINTS, theme } from "../../styles/theme";

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme?.sizes[4]};
  width: 100%;

  @media (max-width: ${BREAKPOINTS.small}) {
    padding: 1rem;
    /* padding: 2rem; */
  }
`;

export const LoginViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-size: 40px;
  font-weight: 300;
  margin-top: -16px;

  text-align: center;

  color: white;

  svg {
    color: ${theme.colors.blue};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const ForgetPassword = styled.button`
  /* all: unset; */
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 0.8rem;
  text-align: end;
  margin-top: -0.7rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${(p) => p.theme?.colors.blue};
    transition: all 0.2s;
  }

  /* color: ${(p) => p.theme?.colors.blue}; */
  /* font-weight: ${(p) => p.theme?.fontWeights.bold}; */
`;
