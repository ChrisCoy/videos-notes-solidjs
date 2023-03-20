import { Component } from "solid-js";
import * as Styles from "./styles";
import { OcVideo3 as VideoIcon } from "solid-icons/oc";
import { Outlet } from "@solidjs/router";

interface LoginLayoutProps {
  class?: string;
}

const LoginLayout: Component<LoginLayoutProps> = (props: LoginLayoutProps) => {
  return (
    <Styles.LoginLayoutWrapper class={props.class}>
      <Styles.Form>
        <Outlet />
      </Styles.Form>
      <Styles.Aside>
        <VideoIcon />
      </Styles.Aside>
    </Styles.LoginLayoutWrapper>
  );
};

export { LoginLayout };
