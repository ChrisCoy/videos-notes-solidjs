import { useNavigate } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import { useAuth } from "../../hooks/useAuth";
import * as Styles from "./styles";
import useVideos from "../../hooks/useVideos";
import Swal from "sweetalert2";

const SettingsView: Component = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { getVideoInfoFromTab } = useVideos();

  async function teste() {


    // console.log("result", result);

    // console.log(await getVideoInfoFromTab());
  }

  return (
    <Styles.SettingsViewWrapper>
      <button onClick={logout}>Log out</button>
      <button onClick={teste}>Teste</button>
    </Styles.SettingsViewWrapper>
  );
};

export { SettingsView };
