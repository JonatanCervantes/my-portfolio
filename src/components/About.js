import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { GridList, GridListTile, Typography } from "@material-ui/core";
import jsLogo from "../assets/images/js-logo.svg";
import nodeJsLogo from "../assets/images/nodejs-logo.svg";
import reactLogo from "../assets/images/react-logo.svg";

const LOGOS = [nodeJsLogo, jsLogo, reactLogo];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    alignSelf: "center",
    alignItems: "center",
    justify: "center",
  },
  titles: {
    paddingBottom: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  phrases: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  logoStyle: {
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
          <Typography className={classes.titles} variant="h3">
            WEB AND MOBILE FOCUSED <br></br>EAGER TO CONTRIBUTE & WILLING TO
            LEARN
          </Typography>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
        <Grid item xs={6} sm={4}>
          <Typography className={classes.phrases}>
            With both team and individual work, I seek to develop software that
            has a true impact on society.
          </Typography>{" "}
        </Grid>
        <Grid item xs={6} sm={4}>
          <GridList cols={3}>
            {LOGOS.map((logo, index) => (
              <GridListTile key={`Logo${index}`} cols={1}>
                <img className={classes.logoStyle} src={logo} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid className={classes.claseBackground} item xs={false} sm={2}></Grid>
      </Grid>
    </div>
  );
}

export default About;
