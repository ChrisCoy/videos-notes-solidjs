import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineLogin as LoginIcon } from "solid-icons/ai";
import { LoginLayout } from "../../layouts/LoginLayout";
import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { AiOutlineMail } from "solid-icons/ai";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import { useToast } from "../../hooks/useToast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebase";
import Button from "../../components/Button";
import { Or } from "../../components/Or";

interface LoginViewProps {}

const LoginView: Component = ({}: LoginViewProps) => {
  const toast = useToast();
  const navigate = useNavigate();

  function handleOnLogin(e: Event) {
    e.preventDefault();
    navigate("/");
    // const data = new FormData(e.target as HTMLFormElement);
    // console.log(data.get("Email"));
    // signInWithEmailAndPassword(auth, "", "") //credentials here
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  }

  function handleOnSignUp() {
    navigate("/account/register");
  }

  return (
    <Styles.LoginViewContainer>
      <Styles.Title>
        <LoginIcon />
        Login
      </Styles.Title>
      <Styles.LoginFormWrapper onsubmit={handleOnLogin}>
        <DefaultInput
          inputLabel="Email"
          icon={<AiOutlineMail />}
          placeholder="email@provider.com"
        />
        <DefaultInput
          inputLabel="Password"
          type="password"
          placeholder="*********"
          icon={<RiSystemLockPasswordLine />}
        />
        <Button type="submit">Sign In</Button>
        <Or />
        <Button onClick={handleOnSignUp} noButton type="button">
          Sign up
        </Button>
      </Styles.LoginFormWrapper>
    </Styles.LoginViewContainer>
  );
};

export { LoginView };
