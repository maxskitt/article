import { createMuiTheme } from "@material-ui/core/styles";

const UiTheme = createMuiTheme({
  palette: {
    background: {
      default: "#EFF2F5",
      light: "#F9FAFB",
    },
    primary: {
      main: "#397ef0",
      light: "#3397FF",
      dark: "#0057B2",
      background: "#EFF2F5",
    },
    secondary: {
      main: "#ffffff",
      border: "#EDEDED",
    },
    text: {
      primary: "#263238",
      secondary: "#546E7A",
      lightBlue: "#5192FF",
    },
    icon: {
      primary: "#909090",
      secondary: "#007DFF",
      error: "#ff505f",
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 500,
      fontSize: 15,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 12,
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
    },
    body2: {
      fontWeight: 400,
      fontSize: 16,
    },
    h2: {
      fontWeight: 700,
      fontSize: 48,
    },
    h3: {
      fontWeight: 900,
      fontSize: 32,
    },
    h4: {
      fontWeight: 700,
      fontSize: 26,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

export default UiTheme;
