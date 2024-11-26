import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(({ theme: { colors } }) => ({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  body: {
    color: colors.blue,
    fontFamily: "var(--font-oswald)",
    fontSize: 18,
    position: "relative",
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  "ul, ol": {
    listStyle: "none",
  },
}));

export { GlobalStyle };
