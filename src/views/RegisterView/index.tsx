import { Component } from "solid-js";
import * as Styles from "./styles";
import { BsPersonPlus as RegisterIcon } from "solid-icons/bs";
import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { AiOutlineMail } from "solid-icons/ai";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Button from "../../components/Button";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";

const RegisterView: Component = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const toast = useToast();

  function handleSignUp(e: SubmitEvent) {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget as HTMLFormElement);
      const email = data.get("email") || "";
      const password = data.get("password") || "";
      const repeatpw = data.get("repeatpw") || "";

      if (email.length < 10) {
        toast.error("Invalid email!");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must have at least 6 characters!");
        return;
      }

      if (password !== repeatpw) {
        toast.error("Password must match!");
        return;
      }

      register({ email: email.toString(), password: password.toString() });
    } catch (error) {}
  }

  return (
    <Styles.LoginViewContainer>
      <Styles.BackIcon size={36} onClick={() => navigate("/account/login")} />
      <Styles.Title>
        <RegisterIcon />
        Sign Up
      </Styles.Title>
      <Styles.LoginFormWrapper onSubmit={handleSignUp}>
        <DefaultInput
          inputLabel="Email"
          idAndName="email"
          icon={<AiOutlineMail />}
          placeholder="email@provider.com"
        />
        <DefaultInput
          inputLabel="Password"
          idAndName="password"
          type="password"
          placeholder="*********"
          icon={<RiSystemLockPasswordLine />}
        />
        <DefaultInput
          inputLabel="Repeat password"
          idAndName="repeatpw"
          type="password"
          placeholder="*********"
          icon={<RiSystemLockPasswordLine />}
        />
        <Button type="submit">Create account</Button>
      </Styles.LoginFormWrapper>
    </Styles.LoginViewContainer>
  );
};

export { RegisterView };
