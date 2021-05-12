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

import backgroundCoding from "../assets/images/background-coding.jpg";
import { MyIcons, ICON_TYPES } from "./MyIcons";

const SKILLS_DATA = [
  {
    type: ICON_TYPES.frontEndIcon,
    title: "Front-End",
    skills: ["JavaScript", "React", "Material-UI", "HTML5"],
  },
  {
    type: ICON_TYPES.backEndIcon,
    title: "Back-End",
    skills: ["NodeJS", "Express", "Java"],
  },
  {
    type: ICON_TYPES.databaseIcon,
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firestore"],
  },
  {
    type: ICON_TYPES.otherIcon,
    title: "Other",
    skills: ["Firebase", "Ionic", "Angular", "MongoDB Atlas"],
  },
  {
    type: ICON_TYPES.softSkillsIcon,
    title: "Soft skills",
    skills: ["Teamwork", "Problem Solving", "Communication", "Adaptability"],
  },
];

const FILL = "white";
const STROKE = "white";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: theme.spacing(1),
  },
  svgIcons: {
    height: 90,
    width: 90,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
    color: "white",
  },
  titles: {
    textAlign: "center",
    color: "white",
  },
  cardStyle: {
    position: "relative",
    background:
      // "linear-gradient(90deg, rgba(42,2,2,1) 33%, rgba(32,11,11,1) 66%, rgba(69,23,29,1) 100%)",
      "linear-gradient(90deg, rgba(1,0,5,1) 26%, rgba(11,14,32,1) 71%, rgba(28,28,43,1) 100%)",
  },
  cardBackground: {
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    border: "3px solid white",
    opacity: "1",
  },
  backgroundImagen: {
    opacity: "0.2",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
  },
}));

function Skills() {
  const classes = useStyles();

  return (
    <>
      <Card alignItems="center" className={classes.cardStyle}>
        <CardMedia
          container
          className={classes.backgroundImagen}
          component="img"
          height="600"
          src={backgroundCoding}
        />
        <Grid alignItems="center" className={classes.overlay} container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.titles} variant="h3">
              SOME OF MY SKILLS{" "}
            </Typography>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>

          <Grid container justify="space-evenly">
            {SKILLS_DATA.map((skill, index) => (
              <Card className={classes.cardBackground} key={`Logo${index}`}>
                <CardActionArea>
                  <div className={classes.iconContainer}>
                    <MyIcons
                      type={skill.type}
                      fill={FILL}
                      stroke={STROKE}
                      style={classes.svgIcons}
                    ></MyIcons>
                  </div>

                  <CardContent className={classes.textContainer}>
                    <Typography gutterBottom variant="h5">
                      {skill.title}
                    </Typography>
                    {skill.skills.map((technology, index) => (
                      <Typography
                        key={`Skill${index}`}
                        variant="body2"
                        color="white"
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
      </Card>
    </>
  );
}

export default Skills;
