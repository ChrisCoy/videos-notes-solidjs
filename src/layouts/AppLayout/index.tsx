import { Outlet } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import { AsideMenu } from "../../components/AsideMenu";
import { useToast } from "../../hooks/useToast";
import * as Styles from "./styles";

interface AppLayoutProps {
  class?: string;
}

const AppLayout: Component<AppLayoutProps> = (props: AppLayoutProps) => {
  return (
    <Styles.AppLayoutWrapper class={props.class}>
      <Styles.ContentContainer>
        <Outlet />
      </Styles.ContentContainer>
      <AsideMenu />
    </Styles.AppLayoutWrapper>
  );
};

export { AppLayout };
