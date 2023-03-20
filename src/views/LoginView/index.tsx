import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import * as Styles from "./styles";
import { OcVideo3 as VideoIcon } from "solid-icons/oc";
import { AiOutlineLogin as LoginIcon } from "solid-icons/ai";
import { LoginForm } from "./components/LoginForm";

interface LoginViewProps {}

const LoginView: Component = ({}: LoginViewProps) => {
  const navigate = useNavigate();
  return (
    <Styles.LoginViewWrapper>
      <Styles.Form>
        <Styles.Title>
          <LoginIcon />
          Login
        </Styles.Title>
        <LoginForm />
      </Styles.Form>
      <Styles.Aside>
        <VideoIcon />
        {/* <NoteIcon /> */}
      </Styles.Aside>
    </Styles.LoginViewWrapper>
  );
};

export { LoginView };
