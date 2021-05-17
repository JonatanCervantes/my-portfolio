import { Grid, Grow, makeStyles, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import SingleProject from "./SingleProject";
import Data from "../data/data.json";
import useOnScreen from "./hooks/useOnScreen";

const PROJECTS = Data.PROJECTS;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    // marginInline: theme.spacing(1),
  },
  gridContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  titles: {
    paddingBottom: theme.spacing(4),
    textAlign: "center",
  },
}));

function Projects() {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Grid container id="projects" className={classes.root} ref={ref}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography className={classes.titles} variant="h3">
            PROJECTS{" "}
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
        <Grow in={isVisible} timeout={2000}>
          <Grid container justify="space-evenly">
            {PROJECTS.map((sp, index) => (
              <SingleProject key={`Project${index}`} project={sp} />
            ))}
          </Grid>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default Projects;
