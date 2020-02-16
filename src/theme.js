import { themes } from "mdx-deck";

const white = "#FFFCF7";

export default {
  ...themes.prism,
  fonts: {
    body: "'Fira Sans Condensed', sans-serif",
    monospace: "'Fira Code', monospace"
  },
  googleFont:
    "https://fonts.googleapis.com/css?family=Fira+Code|Fira+Sans+Condensed:400,700&display=swap",
  prism: {
    codeTagProps: { style: { fontFamily: "Fira Code" } }
  },
  colors: {
    text: white,
    background: "#672A4E",
    primary: white,
    secondary: "#AF9AB2"
  },
  styles: {
    h3: {
      color: "secondary"
    },
    a: {
      color: "secondary"
    },
    th: {
      color: "secondary"
    }
  }
};
