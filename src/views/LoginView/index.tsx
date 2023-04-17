import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import * as Styles from "./styles";
import { AiOutlineLogin as LoginIcon } from "solid-icons/ai";
import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { AiOutlineMail } from "solid-icons/ai";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import { useToast } from "../../hooks/useToast";
import Button from "../../components/Button";
import { Or } from "../../components/Or";
import { useAuth } from "../../hooks/useAuth";

interface LoginViewProps {}

const LoginView: Component = ({}: LoginViewProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleOnLogin(e: SubmitEvent) {
    try {
      e.preventDefault();

      const data = new FormData(e.target as HTMLFormElement);

      const email = data.get("email") || "";
      const password = data.get("password") || "";

      if (email.length < 10) {
        toast.error("Invalid email!");
        return;
      }

      if (password.length < 6) {
        toast.error("Password must have at least 6 characters!");
        return;
      }

      login({ email: email.toString(), password: password.toString() });
    } catch (error) {
      toast.error("Error");
    }
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
          idAndName="email"
          icon={<AiOutlineMail />}
          placeholder="email@provider.com"
        />
        <DefaultInput
          inputLabel="Password"
          type="password"
          idAndName="password"
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
