import { styled } from "solid-styled-components";
import { BREAKPOINTS } from "../../styles/theme";

export const ListItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  img {
    aspect-ratio: 1/1;
    max-width: 90px;
    width: 100%;

    object-fit: cover;
    border-radius: 5px;
    border: 2px solid ${(p) => p.theme?.colors.borderColor};

    @media(max-width:${BREAKPOINTS.small}){
        display: none;
        /* max-width: 70px; */
    }
  }

  & + & {
    border-top: 1px solid ${(p) => p.theme?.colors.borderColor};
    padding-top: 1rem;
    margin-top: 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 0.2rem; */
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Title = styled.div`
  /* display: flex;
  width: 100%; */
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 0.2rem;
  h2 {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-weight: ${(p) => p.theme?.fontWeights.bold};
    transition: color ${(p) => p.theme?.transitions.default};
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
      color: ${(p) => p.theme?.colors.blue};
    }
  }

  span {
    display: flex;
    align-items: center;
    padding-inline: 0.4rem;
    width: fit-content;
    font-size: 0.8rem;
    background: ${(p) => p.theme?.colors.gray};
    height: 1.2rem;
    color: ${(p) => p.theme?.colors.bg};
    font-weight: ${(p) => p.theme?.fontWeights.bold};
    border-radius: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    transition: all 0.3s ${(p) => p.theme?.transitions.bounce};
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
      color: ${(p) => p.theme?.colors.blue} !important;
    }
  }
`;

export const Description = styled.p`
  font-size: 0.925rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Link = styled.a`
  display: grid;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50vw;
  font-size: 0.85rem;
  text-decoration: none;
  width: 100%;
  color: ${(p) => p.theme?.colors.blue};
  transition: filter ${(p) => p.theme?.transitions.default};

  &:hover {
    filter: brightness(1.4);
  }
`;
