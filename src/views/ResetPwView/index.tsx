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
import { BiRegularReset } from "solid-icons/bi";
import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useLoading } from "../../hooks/useLoading";

const ResetPwView: Component = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { setIsLoading } = useLoading();
  const toast = useToast();

  function resetPassword(e: SubmitEvent) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = (document.getElementById("email") as HTMLInputElement).value;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email! Please enter a valid email.");
      return;
    }

    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Email sent successfully!");
        navigate("/account/login");
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          toast.error(error.code);
        } else {
          toast.error("Error sending email!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Styles.LoginViewContainer>
      <Styles.BackIcon size={36} onClick={() => navigate("/account/login")} />
      <Styles.Title>
        {/* <BiRegularReset /> */}
        Reset your password
      </Styles.Title>
      <Styles.LoginFormWrapper onSubmit={resetPassword}>
        <DefaultInput
          inputLabel="Email"
          idAndName="email"
          type="email"
          required
          icon={<AiOutlineMail />}
          placeholder="email@provider.com"
        />
        <Button type="submit">Send Email</Button>
      </Styles.LoginFormWrapper>
    </Styles.LoginViewContainer>
  );
};

export { ResetPwView };
