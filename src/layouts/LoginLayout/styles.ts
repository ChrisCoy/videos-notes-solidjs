import { styled } from "solid-styled-components";

export const LoginLayoutWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const Form = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const Aside = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* position: relative; */

  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;

  animation: rainbow 5s ease infinite;

  svg {
    font-size: 100px;
    animation: floating 3s ease infinite alternate;
    rotate: -30deg;
    margin-bottom: 24px;
  }

  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }

  @keyframes floating {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.1);
    }
  }
`;
