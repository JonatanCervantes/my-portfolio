import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar></Navbar>
        {/* <HeroImage></HeroImage> */}
        {/* <About></About> */}
        <Skills></Skills>

        <Switch>
          <Route path="/" exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
