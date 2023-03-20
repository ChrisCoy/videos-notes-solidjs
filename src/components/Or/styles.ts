import { styled } from "solid-styled-components";

export const OrWrapper = styled.div`
  text-align: center;
  font-weight: ${(p) => p.theme?.fontWeights.bold};
  font-size: ${(p) => p.theme?.fontSizes.xs};
  span {
    background: ${(p) => p.theme?.colors.bg};
    padding-inline: 1.6rem;
    color: #ccc;
  }

  i {
    display: block;
    margin-top: -0.48rem;
    width: 100%;
    box-shadow: 0px 0px 0px 0.2px white;
  }
`;
