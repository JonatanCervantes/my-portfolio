import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

import frontEndIcon from "../assets/images/frontend-icon.svg";
import backEndIcon from "../assets/images/backend-icon.svg";
import databaseIcon from "../assets/images/database-icon.svg";
import otherIcon from "../assets/images/other-icon.svg";
import softSkillsIcon from "../assets/images/softskills-icon.svg";

const SKILLS_DATA = [
  {
    imageUrl: frontEndIcon,
    title: "Front-End",
    skills: ["JavaScript", "React", "Material-UI", "HTML5"],
  },
  {
    imageUrl: backEndIcon,
    title: "Back-End",
    skills: ["NodeJS", "Express", "Java"],
  },
  {
    imageUrl: databaseIcon,
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firestore"],
  },
  {
    imageUrl: otherIcon,
    title: "Other",
    skills: ["Firebase", "Ionic", "Angular", "MongoDB Atlas"],
  },
  {
    imageUrl: softSkillsIcon,
    title: "Soft skills",
    skills: ["Teamwork", "Problem Solving", "Communication", "Adaptability"],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: theme.spacing(1),
  },
  media: {
    height: 90,
    width: 90,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} xs={12}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid justify="center" container xs={12} sm={8}>
          <Typography className={classes.textContainer} variant="h2">
            Some of my skills
          </Typography>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>

        <Grid container justify="space-evenly">
          {SKILLS_DATA.map((skill) => (
            <Card>
              <CardActionArea>
                <div className={classes.iconContainer}>
                  <CardMedia
                    className={classes.media}
                    image={skill.imageUrl}
                    title={skill.title}
                  />
                </div>

                <CardContent className={classes.textContainer}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {skill.title}
                  </Typography>
                  {skill.skills.map((technology) => (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {technology}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;
