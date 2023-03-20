import { AiOutlineInfoCircle as InfoIcon } from "solid-icons/ai";
import { IoWarningOutline as ErrorIcon } from "solid-icons/io";
import { styled } from "solid-styled-components";
import { createContext, For, JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  z-index: 9999999;
  /* background: red; */
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 3px;
  min-height: 40px;
  padding-inline: 1rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border: 1px solid white;
`;

interface ToastContextData {
  // isAuth: Accessor<boolean>;
  // setIsAuth?: Setter<boolean>;
  info: (value: string) => void;
  error: (value: string) => void;
}

const ToastContext = createContext({} as ToastContextData);

type Messages = {
  message: string;
  type: "error" | "info";
};


export function ToastProvider(props: { children: JSX.Element }) {
  const [messages, setMessages] = createStore<Messages[]>([]);

  function info(infoMessage: string) {
    setMessages((old) => [...old, { message: infoMessage, type: "info" }]);
    setTimeout(() => {
      setMessages((old) => [...old.slice(1)]);
    }, 2000);
  }

  function error(errorMessage: string) {
    setMessages((old) => [...old, { message: errorMessage, type: "error" }]);
    setTimeout(() => {
      setMessages((old) => [...old.slice(1)]);
    }, 2000);
  }

  return (
    <ToastContext.Provider value={{ info, error }}>
      <ToastContainer>
        <For each={messages}>
          {(message) => {
            if (message.type === "error")
              return (
                <Message style={{ background: "#ff3939" }}>
                  <ErrorIcon />
                  {message.message}
                </Message>
              );
            return (
              <Message style={{ background: "#67b6ff" }}>
                <InfoIcon />
                {message.message}
              </Message>
            );
          }}
        </For>
      </ToastContainer>
      {props.children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  return context;
}
