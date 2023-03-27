import { Component, JSX } from "solid-js";
import * as Styles from "./styles";
import { FaSolidPen as PenIcon, FaSolidTrash as TrashIcon } from "solid-icons/fa";

interface ListItemProps {
  class?: string;
}

const ListItem: Component<ListItemProps> = (props: ListItemProps) => {
  function handleClick() {
    // TODO
  }
  return (
    <Styles.ListItemWrapper class={props.class}>
      <img src="panda.jpg" />
      <Styles.ContentContainer>
        <Styles.TitleContainer>
          <Styles.Title>
            <h2 onClick={handleClick}>Lorem ipsum dolor sit amet, consectetur...</h2>
            <span>2:33</span>
          </Styles.Title>
          <Styles.ButtonsContainer>
            <PenIcon size={20} />
            <TrashIcon size={20} />
          </Styles.ButtonsContainer>
        </Styles.TitleContainer>
        <Styles.Description onClick={handleClick}>
          {/* <Styles.Description onClick={handleClick}> ADD ON MOBILE*/}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy...
        </Styles.Description>
        <div>
          <Styles.Link
            href="https://www.youtube.com/watch?v=hvVk6Z6EMU8"
            target="_blank"
            tabIndex={1}
          >
            https://www.youtube.com/watch?v=hvVk6Z6EMU8
          </Styles.Link>
        </div>
      </Styles.ContentContainer>
    </Styles.ListItemWrapper>
  );
};

export { ListItem };
