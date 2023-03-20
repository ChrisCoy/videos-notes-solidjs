import { theme } from "../styles/theme";

type Theme = typeof theme;

declare module "solid-styled-components" {
  export interface DefaultTheme extends Theme {}
}
