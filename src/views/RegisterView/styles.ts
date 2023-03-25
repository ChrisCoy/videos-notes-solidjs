import { styled } from "solid-styled-components";
import { theme } from "../../styles/theme";

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
`

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme?.sizes[4]};
  width: 100%;
  padding-inline: ${(p) => p.theme?.sizes[16]};
`;