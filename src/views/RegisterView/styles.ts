import { styled } from "solid-styled-components";
import { BREAKPOINTS, theme } from "../../styles/theme";
import { CgChevronLeftO } from "solid-icons/cg";

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

export const BackIcon = styled(CgChevronLeftO)`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  cursor: pointer;
  transition: all ${(p) => p.theme?.transitions.default};

  &:hover{
    color: ${(p) => p.theme?.colors.blue} !important;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme?.sizes[4]};
  width: 100%;

  @media (max-width: ${BREAKPOINTS.small}) {
    padding: 1rem;
  }
`;
