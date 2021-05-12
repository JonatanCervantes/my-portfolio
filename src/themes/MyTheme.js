import { createMuiTheme } from "@material-ui/core/styles";
import { grey, blueGrey, cyan } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
    fontWeightLight: 500,
    fontWeightRegular: 600,
    // fontWeightMedium: 700,
    // fontWeightBold: 900,
  },
});

export default theme;
