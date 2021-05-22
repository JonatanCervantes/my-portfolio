import { Grid, Grow, makeStyles, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import backgroundGif from "../assets/videos/background-coding.gif";
import Datos from "../data/data.json";
import useOnScreen from "./hooks/useOnScreen";
import SingleSkill from "../components/SingleSkill";

const SKILLS_DATA = Datos.SKILLS_DATA;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "100%",
    background: `no-repeat  url(${backgroundGif})`,
    backgroundSize: "100% 100%",
  },
  titles: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    // padding: theme.spacing(2),
    paddingBlock: theme.spacing(3),
  },
  singleCard: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    border: "3px solid",
    borderColor: theme.palette.text.secondary,
  },
  subContainer: {
    backgroundColor: "rgb(23,24,24,0.9)",
  },
  contentStyle: {
    padding: theme.spacing(1),
  },
}));

function Skills() {
  const classes = useStyles();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Grid container id="skills" className={classes.root}>
      <Grid alignItems="center" className={classes.subContainer} container>
        <Grid container className={classes.contentStyle}>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Typography className={classes.titles} variant="h3">
              SOME OF MY SKILLS{" "}
            </Typography>
          </Grid>
          <Grid item xs={false} sm={2}></Grid>

          <Grow in={isVisible} timeout={5000}>
            <Grid ref={ref} container justify="space-evenly">
              {SKILLS_DATA.map((skill, index) => (
                <Grid
                  item
                  className={classes.singleCard}
                  key={`Skill${index}`}
                  // xs
                >
                  <SingleSkill skill={skill} />
                </Grid>
              ))}
            </Grid>
          </Grow>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skills;
