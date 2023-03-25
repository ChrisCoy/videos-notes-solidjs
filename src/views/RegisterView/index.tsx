import { Component } from "solid-js";
import { LoginLayout } from "../../layouts/LoginLayout";
import * as Styles from "./styles";
import { BsPersonPlus as RegisterIcon } from "solid-icons/bs";
import { DefaultInput } from "../../components/Inputs/DefaultInput";
import { AiOutlineMail } from "solid-icons/ai";
import { RiSystemLockPasswordLine } from "solid-icons/ri";
import Button from "../../components/Button";
import { CgChevronLeftO as BackIcon } from "solid-icons/cg";
import { useNavigate } from "@solidjs/router";

const RegisterView: Component = () => {
  const navigate = useNavigate();
  return (
    <Styles.LoginViewContainer>
      <BackIcon
        size={32}
        style={{ position: "absolute", top: "0.8rem", cursor: "pointer" }}
        onClick={() => navigate("/account/login")}
      />
      <Styles.Title>
        <RegisterIcon />
        Sign Up
      </Styles.Title>
      <Styles.LoginFormWrapper>
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
        <DefaultInput
          inputLabel="Repeat password"
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
