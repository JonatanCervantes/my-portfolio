import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    primary: {
      //   main: "#263238",
      main: blueGrey[900],
    },
    text: {
      //   primary: "#263238",
      //   secondary: "#C1CBC0",
      primary: blueGrey[900],
      secondary: blueGrey[50],
    },
    background: {
      default: blueGrey[50],
      // paper: grey[900],
    },
  },

  typography: {
    fontSize: 15,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    // fontWeightMedium: 700,
    // fontWeightBold: 900,
  },
});

const themeOptions = {
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
};
theme = responsiveFontSizes(theme, themeOptions);

export default theme;
