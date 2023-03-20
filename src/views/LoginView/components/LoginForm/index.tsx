import { signInWithEmailAndPassword } from "firebase/auth";
import { Component } from "solid-js";
import Button from "../../../../components/Button";
import { DefaultInput } from "../../../../components/Inputs/DefaultInput";
import { Or } from "../../../../components/Or";
import { auth } from "../../../../service/firebase";
import * as Styles from "./styles";
import { AiOutlineMail } from "solid-icons/ai";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import { useToast } from "../../../../hooks/useToast";
import { A } from "@solidjs/router";

const LoginForm: Component = () => {
  const toast = useToast();

  function handleOnLogin(e: Event) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log(data.get("Email"));
    signInWithEmailAndPassword(auth, "", "") //credentials here
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <Styles.LoginFormWrapper onsubmit={handleOnLogin} id="testesss">
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
      <A href="register">
        <Button onclick={() => {}} noButton>
          Sign up
        </Button>
      </A>
    </Styles.LoginFormWrapper>
  );
};

export { LoginForm };
