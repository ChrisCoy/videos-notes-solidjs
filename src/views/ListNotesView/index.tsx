import { Component, For, Show } from "solid-js";
import { ListItem } from "../../components/ListItem";
import * as Styles from "./styles";

import useVideos from "../../hooks/useVideos";
import { useLoading } from "../../hooks/useLoading";

const ListNotesView: Component = () => {
  const { notes } = useVideos();
  const { isLoading } = useLoading();

  return (
    <Styles.ListNotesViewWrapper>
      <For each={notes()}>{(note) => <ListItem note={note} />}</For>
      <Show when={notes()?.length === 0 && !isLoading()}>
        <p>
          No annotation was created. Click on the first button in the side menu to crate one.
        </p>
      </Show>
    </Styles.ListNotesViewWrapper>
  );
};

export { ListNotesView };
