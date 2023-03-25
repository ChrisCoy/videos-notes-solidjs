import { styled } from "solid-styled-components";
import { BREAKPOINTS } from "../../styles/theme";

export const AppLayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
    padding-bottom: 4rem;
    min-height: 100vh;
  }
`;

export const ContentContainer = styled.div`
  padding: 1rem;
  width: 100%;
  /* margin: 1rem; */
`;
