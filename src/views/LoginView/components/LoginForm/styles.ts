import { styled } from "solid-styled-components";

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme?.sizes[4]};
  width: 100%;
  padding-inline: ${(p) => p.theme?.sizes[16]};
`;