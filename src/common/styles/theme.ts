const theme = {
  _baseSpacing: 2,
  shadows: {
    sm: "0px 4px 4px 0px #00000040",
  },
  colors: {
    text: {
      primary: "#777777",
      secondary: "#444444",
    },
    button: {
      primary: "#EB0A0A",
      disabled: "#D8D8D8",
    },
    borders: {
      primary: "#F0F0F0",
    },
    background: {
      primary: "#FAFAFA",
      secondary: "#FFFFFF",
    },
  },
  size: {
    text: {
      sm: "12px",
      md: "14px",
    },
  },
  utils: {
    spacing: (...values: number[]) =>
      values.map((value) => `${value * theme._baseSpacing}px`).join(" "),
  },
} as const;

export default theme;
