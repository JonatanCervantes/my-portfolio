import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/themes/MyTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <Body></Body>
        </ThemeProvider>
        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
