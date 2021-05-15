import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import About from "./About";
import HeroImage from "./HeroImage";
import useWindowDimensions from "./hooks/useWindowDimensions";
// import ModalPlayer from "./ModalPlayer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
// import SimpleModal from "./Test";
// import Test from "./Test";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "llinear-gradient(90deg, rgba(215,222,226,1) 33%, rgba(233,238,241,1) 66%, rgba(255,253,253,1) 100%)",
    // backgroundColor: theme.palette.background.default,
  },
  gridStyle: {
    // minHeight: "600px ",
    // border: "1px dashed green",
  },
  sameBackground: {
    background:
      "radial-gradient(circle, rgba(23,24,24,1) 50%, rgba(28,33,36,1) 90%)",
  },
}));

function Body() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  console.log("height" + height);

  return (
    <>
      <Grid className={classes.root} container>
        <Grid container className={classes.sameBackground}>
          <Navbar></Navbar>
          <Grid
            alignItems="center"
            className={classes.gridStyle}
            container
            style={{ minHeight: height }}
          >
            <HeroImage></HeroImage>
          </Grid>
        </Grid>

        <Grid
          alignItems="center"
          className={classes.gridStyle}
          container
          style={{ minHeight: height }}
        >
          <About></About>
        </Grid>

        <Grid
          alignItems="center"
          className={classes.gridStyle}
          container
          style={{ minHeight: height }}
        >
          <Skills></Skills>
        </Grid>

        <Grid
          alignItems="center"
          className={classes.gridStyle}
          container
          style={{ minHeight: height }}
        >
          <Projects></Projects>
        </Grid>

        {/* <Grid alignItems="center" className={classes.gridStyle} container>
          <ModalPlayer></ModalPlayer>
        </Grid> */}
      </Grid>
    </>
  );
}

export default Body;
