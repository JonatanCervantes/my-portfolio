import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import heroBackground from "../assets/images/montana.jpg";
// import heroBackground from "../assets/videos/background-binary.gif";

const useStyles = makeStyles({
  root: {
    //marginInline: "2px",
  },
  card: {
    position: "relative",
  },
  media: {
    //opacity: "",
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
          height="400"
          src={heroBackground}
        />
        <div className={styles.overlay}>
          <Typography className={styles.typography} variant="h4" component="h1">
            Jonatan Cervantes
          </Typography>
          <Typography className={styles.typography} variant="h6" component="h1">
            Ingeniero en Software
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default HeroImage;
