import { Component, JSX } from "solid-js";
import { ListItem } from "../../components/ListItem";
import * as Styles from "./styles";

const ListNotesView: Component = () => {
  return (
    <Styles.ListNotesViewWrapper>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Styles.ListNotesViewWrapper>
  );
};

export { ListNotesView };
