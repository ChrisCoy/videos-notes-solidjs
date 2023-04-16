import { createGlobalStyles } from "solid-styled-components";
import { BREAKPOINTS, theme } from "./theme";

export const globalStyle = createGlobalStyles`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    } 
  }

  *:focus-visible{
    outline: none;
    box-shadow: 0px 0px 5px  #aaa;
    z-index: 1;
  }

  #root{
    position: relative;
    background: ${theme.colors.bg};
    height: 369px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 0px 2px white;
    @media(max-width:${BREAKPOINTS.small}){
        height: unset;
    }
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Roboto", Helvetica, sans-serif;
    color: white;
    font-size: 1rem;
    background: #111;
    @media(max-width:${BREAKPOINTS.small}){
        height: unset;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aaaaaa;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #868585;
  }
`;
