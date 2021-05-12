import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// import heroBackground from "../assets/images/montana.jpg";
import heroBackground from "../assets/videos/background-binary.gif";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    position: "relative",
    background:
      // "linear-gradient(90deg, rgba(42,2,2,1) 33%, rgba(32,11,11,1) 66%, rgba(69,23,29,1) 100%)",
      "linear-gradient(90deg, rgba(1,0,5,1) 26%, rgba(11,14,32,1) 71%, rgba(28,28,43,1) 100%)",
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
    color: "white",
  },
});

function HeroImage() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardMedia
          className={styles.media}
          component="img"
          height="600"
          src={heroBackground}
        />
        <div className={styles.overlay}>
          <Typography className={styles.typography} variant="h2">
            JONATAN CERVANTES
          </Typography>
          <Typography className={styles.typography} variant="h3">
            SOFTWARE ENGINEER
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default HeroImage;
