import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import { useAuth } from "../../hooks/useAuth";
import * as Styles from "./styles";

const SettingsView: Component = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <Styles.SettingsViewWrapper>
      <button onClick={logout}>Log out</button>
    </Styles.SettingsViewWrapper>
  );
};

export { SettingsView };
