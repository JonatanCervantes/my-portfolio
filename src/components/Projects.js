import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SingleProject from "./SingleProject";
import Data from "../data/data.json";

const PROJECTS = Data.PROJECTS;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "105%",
    // marginInline: theme.spacing(1),
  },
  gridContainer: {
    alignSelf: "center",
    alignItems: "center",
    justify: "center",
  },

  titles: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <Grid container id="projects" className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={3}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography className={classes.titles} variant="h3">
            PROJECTS{" "}
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
        <Grid container justify="space-evenly">
          {PROJECTS.map((sp, index) => (
            <SingleProject key={`Project${index}`} project={sp} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;
