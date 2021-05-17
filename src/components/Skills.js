import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useRef } from "react";
import backgroundGif from "../assets/videos/background-coding.gif";
import { MyIcons } from "./MyIcons";
import Datos from "../data/data.json";
import useOnScreen from "./hooks/useOnScreen";

const SKILLS_DATA = Datos.SKILLS_DATA;
const FILL = "white";
const STROKE = "white";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
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
    color: theme.palette.text.secondary,
  },
  titles: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    paddingBottom: theme.spacing(4),
  },
  cardStyle: {
    width: "100%",
    height: "100%",
    position: "relative",
    background:
      "radial-gradient(circle, rgba(23,24,24,1) 50%, rgba(28,33,36,1) 90%)",
  },
  cardBackground: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    backgroundColor: "transparent",
    border: "3px solid",
    borderColor: theme.palette.text.secondary,
    opacity: "0.9",
  },
  backgroundImagen: {
    opacity: "0.1",
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
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <Grid container id="skills" className={classes.root}>
      <Card className={classes.cardStyle}>
        <CardMedia
          className={classes.backgroundImagen}
          component="img"
          height="600px"
          src={backgroundGif}
        />

        <Grid alignItems="center" className={classes.overlay} container>
          <Grid container>
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
            </Grow>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Skills;
