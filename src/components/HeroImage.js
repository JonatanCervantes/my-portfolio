import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import backgroundGif from "../assets/videos/background-coding-2.gif";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  card: {
    position: "relative",
    background: "transparent",
    width: "100%",
    height: "100%",
  },
  media: {
    opacity: "0.1",
  },
  overlay: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  typography: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  subHeader: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
}));

function HeroImage() {
  const styles = useStyles();

  return (
    <Grid container id="heroImage" className={styles.root}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          component="img"
          height="100%"
          src={backgroundGif}
        />
        <div className={styles.overlay}>
          <Typography className={styles.typography} variant="h2">
            JONATAN CERVANTES{" "}
          </Typography>
          <Typography className={styles.subHeader} variant="h4">
            SOFTWARE ENGINEER{" "}
          </Typography>
        </div>
      </Card>
    </Grid>
  );
}

export default HeroImage;
