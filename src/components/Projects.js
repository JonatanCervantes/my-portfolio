import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import alzaidIcon from "../assets/images/alzaid-icon.svg";
import bsbIcon from "../assets/images/bsb-icon.svg";
import montanaIcon from "../assets/images/montana.jpg";
import SingleProject from "./SingleProject";

const PROJECTS = [
  {
    imageUrl: alzaidIcon,
    title: "Alzaid",
    skills: ["TypeScript", "Ionic", "Angular", "NodeJS", "Mongo"],
    description:
      "I developed a Mobile App for an alzheimer elderly care home, where its employees with different roles send notifications to each other, administrate their patients daily activities, humor and incidences.  Its front-end was developed with TypeScript, Angular, Ionic, HTML and CSS. Its back-end was developed using Node JS and its database with Mongo DB.",
  },
  {
    imageUrl: bsbIcon,
    title: "Barber Brothers",
    skills: ["Kotlin", "Android Studio", "Firestore", "Coroutines"],
    description:
      "Developed an android app using Kotlin for a local barber shop. Implemented CRUD operations to manage appointments, employees and services offered. Incorporated Firebase for: authentications, firestore, storage and push notifications.  Use of coroutines and MVVM.",
  },
  {
    imageUrl: montanaIcon,
    title: "My portfolio",
    skills: ["JavaScript", "React", "Material-UI", "Firebase"],
    description:
      "Developed a web app using React to showcase who I am, my skills and some of my projects. Achieved responsive design thanks to the implementation of Material-UI.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: theme.spacing(1),
  },
  textContainer: {
    textAlign: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography className={classes.textContainer} variant="h2">
            Projects{" "}
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
        <Grid container justify="space-evenly">
          {PROJECTS.map((sp) => (
            <SingleProject project={sp} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
