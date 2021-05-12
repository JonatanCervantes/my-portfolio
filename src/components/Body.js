import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import About from "./About";
import HeroImage from "./HeroImage";
import Projects from "./Projects";
import Skills from "./Skills";
import Test from "./Test";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridStyle: {
    minHeight: "600px ",
    border: "1px dashed green",
  },
}));

function Body() {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <Grid alignItems="center" className={classes.gridStyle} container>
          <HeroImage></HeroImage>
        </Grid>

        <Grid alignItems="center" className={classes.gridStyle} container>
          <About></About>
        </Grid>

        <Grid alignItems="center" className={classes.gridStyle} container>
          <Skills></Skills>
        </Grid>

        <Grid alignItems="center" className={classes.gridStyle} container>
          <Projects></Projects>
        </Grid>

        {/* <Grid alignItems="center" className={classes.gridStyle} container>
          <Test></Test>
        </Grid> */}
      </Grid>
    </>
  );
}

export default Body;
