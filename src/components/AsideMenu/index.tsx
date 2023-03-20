import { Component } from "solid-js";
import * as Styles from "./styles";
import { FaRegularPenToSquare as NotesIcon, FaSolidList as ListIcon } from "solid-icons/fa";
import { IoSettingsOutline as GearIcon } from "solid-icons/io";
import { useToast } from "../../hooks/useToast";
import { useLocation } from "@solidjs/router";

interface AsideMenuProps {
  class?: string;
}

const AsideMenu: Component<AsideMenuProps> = (props: AsideMenuProps) => {
  const nav = useLocation();
  const toast = useToast();

  console.log(nav);

  return (
    <Styles.AsideMenuWrapper class={props.class}>
      <Styles.Item onClick={() => toast.info("Teste")} tabIndex={0}>
        <NotesIcon />
      </Styles.Item>
      <Styles.Item tabIndex={0}>
        <ListIcon />
      </Styles.Item>
      <Styles.Item active tabIndex={0}>
        <GearIcon />
      </Styles.Item>
    </Styles.AsideMenuWrapper>
  );
};

export { AsideMenu };
