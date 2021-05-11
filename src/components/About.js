import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Avatar,
  Card,
  CardMedia,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import jsLogo from "../assets/images/js-logo.svg";
import nodeJsLogo from "../assets/images/nodejs-logo.svg";
import reactLogo from "../assets/images/react-logo.svg";

const LOGOS = [nodeJsLogo, jsLogo, reactLogo];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: theme.spacing(1),
  },
  gridContainer: {
    alignSelf: "center",
    alignItems: "center",
    justify: "center",
  },
  titulos: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  frases: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  gridListTile: {},
  imagen: {
    paddingInline: theme.spacing(1),
    width: "100%",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.titulos}>
            WEB AND MOBILE FOCUSED <br></br>EAGER TO CONTRIBUTE & WILLING TO
            LEARN
          </Typography>
        </Grid>
        <Grid xs={0} sm={2}></Grid>
        <Grid item xs={6} sm={4}>
          <Typography className={classes.frases}>
            With both team and individual work, I seek to develop software that
            has a true impact on society.
          </Typography>{" "}
        </Grid>
        <Grid container xs={6} sm={4}>
          <GridList cols={3}>
            {LOGOS.map((logo) => (
              <GridListTile className={classes.gridListTile} cols={1}>
                <img className={classes.imagen} src={logo} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default About;
