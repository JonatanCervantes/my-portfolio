import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import backgroundGif from "../assets/videos/background-coding-2.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  card: {
    position: "relative",
    background: "transparent",
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
}));

function HeroImage() {
  const styles = useStyles();

  return (
    <div id="heroImage" className={styles.root}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          component="img"
          height="600px"
          src={backgroundGif}
        />
        <div className={styles.overlay}>
          <Typography className={styles.typography} variant="h2">
            JONATAN CERVANTES{" "}
          </Typography>
          <Typography className={styles.typography} variant="h3">
            SOFTWARE ENGINEER{" "}
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default HeroImage;
