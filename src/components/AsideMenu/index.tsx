import { Component } from "solid-js";
import * as Styles from "./styles";
import { FaRegularPenToSquare as NotesIcon, FaSolidList as ListIcon } from "solid-icons/fa";
import { IoSettingsOutline as GearIcon } from "solid-icons/io";
import { useToast } from "../../hooks/useToast";
import { useLocation, useNavigate } from "@solidjs/router";

interface AsideMenuProps {
  class?: string;
}

const AsideMenu: Component<AsideMenuProps> = (props: AsideMenuProps) => {
  const nav = useLocation();
  const navigate = useNavigate();

  const toast = useToast();

  return (
    <Styles.AsideMenuWrapper class={props.class}>
      <Styles.Item
        active={nav.pathname === "/create"}
        onClick={() => navigate("/create")}
        tabIndex={0}
      >
        <NotesIcon />
      </Styles.Item>
      <Styles.Item active={nav.pathname === "/"} tabIndex={0} onClick={() => navigate("/")}>
        <ListIcon />
      </Styles.Item>
      <Styles.Item
        active={nav.pathname === "/settings"}
        tabIndex={0}
        onClick={() => navigate("/settings")}
      >
        <GearIcon />
      </Styles.Item>
    </Styles.AsideMenuWrapper>
  );
};

export { AsideMenu };
