import { Component, JSX, Show } from "solid-js";
import * as Styles from "./styles";
import {
  FaRegularImage,
  FaSolidPen as PenIcon,
  FaSolidTrash as TrashIcon,
} from "solid-icons/fa";
import useVideos, { NoteData } from "../../hooks/useVideos";
import Swal from "sweetalert2";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "@solidjs/router";

interface ListItemProps {
  class?: string;
  note: NoteData;
  // note: {
  //   thumbnail?: string;
  //   title: string;
  //   time: string;
  //   url: string;
  //   text: string;
  // };
}

const ListItem: Component<ListItemProps> = (props: ListItemProps) => {
  const { convertTime, deleteNote, refetch } = useVideos();
  const navigate = useNavigate();
  const toast = useToast();

  function handleSeeNote(id: string) {
    navigate("/" + id);
  }

  function handleEditClick(id: string) {
    navigate("/edit/" + id);
  }

  async function handleDeleteClick(id: string) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      deleteNote(id);
      toast.info("Note deleted successfully");
    }
  }

  return (
    <Styles.ListItemWrapper class={props.class} tabIndex={-1}>
      <Show
        when={props.note.thumbnail}
        fallback={
          <Styles.FallBackImage>
            <FaRegularImage />
          </Styles.FallBackImage>
        }
      >
        <img src={props.note.thumbnail} />
      </Show>
      <Styles.ContentContainer>
        <Styles.TitleContainer>
          <Styles.Title>
            <h2
              role="button"
              onkeypress={(e) => {
                if (e.key === "Enter") {
                  handleSeeNote(props.note.id!);
                }
              }}
              onClick={() => handleSeeNote(props.note.id!)}
              tabIndex={1}
            >
              {props.note.title}
            </h2>
            <Show when={props.note.time}>
              <span>{convertTime(props.note.time)}</span>
            </Show>
          </Styles.Title>
          <Styles.ButtonsContainer>
            <button tabIndex={1} onClick={() => handleEditClick(props.note.id!)}>
              <PenIcon size={20} />
            </button>

            <button tabIndex={1} onClick={() => handleDeleteClick(props.note.id!)}>
              <TrashIcon size={20} />
            </button>
          </Styles.ButtonsContainer>
        </Styles.TitleContainer>
        <Styles.Description>{props.note.text}</Styles.Description>
        <div>
          <Styles.Link href={props.note.url} target="_blank" tabIndex={1}>
            {props.note.url}
          </Styles.Link>
        </div>
      </Styles.ContentContainer>
    </Styles.ListItemWrapper>
  );
};

export { ListItem };
