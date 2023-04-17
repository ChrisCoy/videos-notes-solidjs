import { styled } from "solid-styled-components";

export const SendFeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  height: 100%;
`;



export const Timer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.4rem;
    font-weight: ${(p) => p.theme?.fontWeights.thin};
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 0.5rem;
`;
