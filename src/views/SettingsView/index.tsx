import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import * as Styles from "./styles";

const SettingsView: Component = () => {
  const navigate = useNavigate();
  return (
    <Styles.SettingsViewWrapper>
      <button onClick={() => navigate("/account/login")}>Log out</button>
    </Styles.SettingsViewWrapper>
  );
};

export { SettingsView };
