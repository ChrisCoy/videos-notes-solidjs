import { Component, For, JSX, createEffect, onMount } from "solid-js";
import { ListItem } from "../../components/ListItem";
import * as Styles from "./styles";
import { createStore } from "solid-js/store";
import useVideos, { NoteData } from "../../hooks/useVideos";
import { useLoading } from "../../hooks/useLoading";
import { useAuth } from "../../hooks/useAuth";

const ListNotesView: Component = () => {
  // const [notesList, setNotesList] = createStore<NoteData[]>([]);
  const { notes } = useVideos();
  const { setIsLoading } = useLoading();

  return (
    <Styles.ListNotesViewWrapper>
      <For each={notes()}>{(note) => <ListItem note={note} />}</For>
    </Styles.ListNotesViewWrapper>
  );
};

export { ListNotesView };
