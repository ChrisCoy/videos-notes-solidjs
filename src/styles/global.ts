// import { globalStyle } from "@macaron-css/core";
// import { theme } from "./theme";

// globalStyle("*", {
//   margin: 0,
//   padding: 0,
//   boxSizing: "border-box",
//   WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
//   ["-moz-tap-highlight-color" as any]: "rgba(0, 0, 0, 0)",
//   WebkitFontSmoothing: "antialiased",
//   MozOsxFontSmoothing: "grayscale",
//   color: "white",
// });

// // globalStyle("html", {

// // });

// globalStyle("::before", {
//   boxSizing: "inherit",
// });

// globalStyle("::after", {
//   boxSizing: "inherit",
// });

// globalStyle("body", {
//   height: "369px",
//   width: "600px",
//   fontFamily: "Roboto, sans-serif",
//   fontSize: "1rem",
// });

// globalStyle("#root", {
//   width: "100%",
//   height: "100%",
//   background: theme.color.bg,
// });

import { createGlobalStyles } from "solid-styled-components";
import { theme } from "./theme";

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
    box-shadow: 0px 0px 5px #aaa;
  }

  html, body, #root {
    height: 100%;
  }

  #root{
    background: ${theme.colors.bg};
  }

  body {
    font-family: "Roboto", Helvetica, sans-serif;
    color: white;
    height: 369px;
    width: 600px;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 5px;
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
