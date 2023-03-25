import { Accessor, createContext, createSignal, JSX, Setter, useContext } from "solid-js";
import { styled } from "solid-styled-components";

interface LoadingContextData {
  isLoading: Accessor<boolean>;
  setIsLoading?: Setter<boolean>;
}

const LoadingContainer = styled.div<{ isLoading: boolean }>`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8rem;
  padding-bottom: 2rem;

  transition: all 0.2s;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.8);

  opacity: ${(p) => (p.isLoading ? 1 : 0)};
  /* visibility: ${(p) => (p.isLoading ? "visible" : 0)}; */
  pointer-events: ${(p) => (p.isLoading ? "all" : "none")};

  .size-control {
    transform: scale(0.5);
  }

  .tetromino {
    width: 96px;
    height: 112px;
    position: absolute;
    transition: all ease 0.3s;
    background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23dd00f3" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E')
      no-repeat top center;
    /* background-size: 50%; */
  }

  .box1 {
    animation: tetromino1 1.5s ease-out infinite;
  }

  .box2 {
    animation: tetromino2 1.5s ease-out infinite;
  }

  .box3 {
    animation: tetromino3 1.5s ease-out infinite;
    z-index: 2;
  }

  .box4 {
    animation: tetromino4 1.5s ease-out infinite;
  }

  @keyframes tetromino1 {
    0%,
    40% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(48px, -27px);
    }
    60%,
    100% {
      transform: translate(96px, 0);
    }
  }
  @keyframes tetromino2 {
    0%,
    20% {
      transform: translate(96px, 0px);
    }
    40%,
    100% {
      transform: translate(144px, 27px);
    }
  }
  @keyframes tetromino3 {
    0% {
      transform: translate(144px, 27px);
    }
    20%,
    60% {
      transform: translate(96px, 54px);
    }
    90%,
    100% {
      transform: translate(48px, 27px);
    }
  }
  @keyframes tetromino4 {
    0%,
    60% {
      transform: translate(48px, 27px);
    }
    90%,
    100% {
      transform: translate(0, 0);
    }
  }
`;

const LoadingContext = createContext({} as LoadingContextData);

export function LoadingProvider(props: { children: JSX.Element }) {
  console.log({ props });

  const [isLoading, setIsLoading] = createSignal(true);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
      <LoadingContainer isLoading={isLoading()}>
        <div class="size-control">
          <div class="tetromino box1"></div>
          <div class="tetromino box2"></div>
          <div class="tetromino box3"></div>
          <div class="tetromino box4"></div>
        </div>
      </LoadingContainer>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  return context;
}
