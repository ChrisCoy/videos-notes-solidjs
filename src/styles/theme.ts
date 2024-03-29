const sizes = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem",
};

export const BREAKPOINTS = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
} as const;

export const theme = {
  colors: {
    brand: "blue",
    bg: "#181818",
    borderColor: "#2F2F2F",
    text: "#2A2A2A",
    blue: "#3EA6FF",
    gray: "#C4C4C4",
  },
  fonts: {
    default: "Roboto, sans-serif",
    code: "monospace",
  },
  fontWeights: {
    thin: "100",
    regular: "400",
    bold: "700",
  },
  fontSizes: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "3rem",
    "7xl": "4rem",
    "8xl": "4.5rem",
    "9xl": "6rem",
  },
  zIndices: {
    base: "10",
    menu: "20",
    overlay: "30",
    modal: "40",
    alwaysOnTop: "50",
  },
  sizes: sizes,
  transitions: {
    default: "0.3s ease-in-out",
    bounce: "cubic-bezier(.47,1.64,.41,.8)",
  },
};
