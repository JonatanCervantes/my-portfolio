import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import alzaidIcon from "../assets/images/alzaid-icon.svg";
import bsbIcon from "../assets/images/bsb-icon.svg";
import jcLogo from "../assets/images/jc-logo.png";
import SingleProject from "./SingleProject";

const ALZAID_URL = "https://github.com/eduardoislas/AlzhaidApp";
const BSB_URL = "https://github.com/JonatanCervantes/bsb";
const MYPORTFOLIO_URL = "https://github.com/JonatanCervantes/my-portfolio";

const PROJECTS = [
  {
    projectUrl: ALZAID_URL,
    imageUrl: alzaidIcon,
    title: "Alzaid",
    skills: ["TypeScript", "Ionic", "Angular", "NodeJS", "Mongo"],
    description:
      "I developed a Mobile App for an alzheimer elderly care home, where its employees with different roles send notifications to each other, administrate their patients daily activities, humor and incidences.  Its front-end was developed with TypeScript, Angular, Ionic, HTML and CSS. Its back-end was developed using Node JS and its database with Mongo DB.",
  },
  {
    projectUrl: BSB_URL,
    imageUrl: bsbIcon,
    title: "Barber Brothers",
    skills: ["Kotlin", "Android Studio", "Firestore", "Coroutines"],
    description:
      "Developed an android app using Kotlin for a local barber shop. Implemented CRUD operations to manage appointments, employees and services offered. Incorporated Firebase for: authentications, firestore, storage and push notifications.  Use of coroutines and MVVM.",
  },
  {
    projectUrl: MYPORTFOLIO_URL,
    imageUrl: jcLogo,
    title: "My portfolio",
    skills: ["JavaScript", "React", "Material-UI", "Firebase"],
    description:
      "Developed a web app using React to showcase who I am, my skills and some of my projects. Achieved responsive design thanks to the implementation of Material-UI.",
  },
];

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
