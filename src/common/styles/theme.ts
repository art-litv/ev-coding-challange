const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
} as const;

const theme = {
  _baseSpacing: 2,
  breakpoints,
  media: {
    xs: `@media (max-width: ${breakpoints.xs})`,
    sm: `@media (max-width: ${breakpoints.sm})`,
    md: `@media (max-width: ${breakpoints.md})`,
    lg: `@media (max-width: ${breakpoints.lg})`,
    xl: `@media (max-width: ${breakpoints.xl})`,
  },
  shadows: {
    sm: "0px 4px 4px 0px #00000040",
    md: "0px 1px 2px 0px #00000066",
  },
  colors: {
    text: {
      primary: "#777777",
      secondary: "#444444",
    },
    button: {
      primary: "#EB0A0A",
      secondary: "rgba(0,0,0,0.1)",
      disabled: "#D8D8D8",
    },
    borders: {
      primary: "#F0F0F0",
    },
    background: {
      primary: "#FAFAFA",
      secondary: "#FFFFFF",
    },
    divider: {
      primary: "#F0F0F0",
    },
  },
  size: {
    text: {
      sm: "12px",
      md: "14px",
    },
  },
  utils: {
    spacing(...values: number[]) {
      return values.map((value) => `${value * theme._baseSpacing}px`).join(" ");
    },
  },
} as const;

export type Theme = typeof theme;

export default theme;
