import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import { getProperLogo } from "./MyLogos";
import ModalPlayer from "./ModalPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  media: {
    height: 90,
    width: 90,
    // height: "8vw",
    // width: "8vw",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
    maxWidth: "300px",
  },
  flexContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  cardFooter: {
    marginTop: "auto",
  },
}));

function SingleProject(props) {
  const buttonTexts = ["Description", "Technologies"];
  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonText, setButtonText] = useState(buttonTexts[0]);
  const [demoButtonDisabled, setDemoButtonDisabled] = useState(false);
  const modalPlayerRef = useRef();
  const project = props.project;
  const classes = useStyles();

  const flipCard = () => {
    if (isFlipped) setButtonText(buttonTexts[0]);
    else setButtonText(buttonTexts[1]);
    setIsFlipped((prev) => !prev);
  };

  const checkDemoButton = () => {
    if (project.demoUrl === "") setDemoButtonDisabled(true);
  };

  useEffect(() => {
    checkDemoButton();
  }, []);

  return (
    <Card className={classes.root}>
      <div className={classes.flexContainer}>
        <div className={classes.iconContainer}>
          <CardMedia
            className={classes.media}
            image={getProperLogo(project.logoType)}
            title={project.title}
          />
        </div>
        <CardContent className={classes.textContainer}>
          <Typography gutterBottom variant="h5">
            {project.title}
          </Typography>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="CardFront">
              {project.skills.map((technology, index) => (
                <Typography
                  key={`Technology${index}`}
                  variant="body2"
                  component="p"
                >
                  {technology}
                </Typography>
              ))}
            </div>
            <div className={"CardBack"}>
              <Typography variant="body2" component="p" align="justify">
                {project.description}
              </Typography>
            </div>
          </ReactCardFlip>
        </CardContent>
        <div className={classes.cardFooter}>
          <CardActions>
            <Button onClick={() => flipCard()} size="small" color="primary">
              {buttonText}
            </Button>

            <Button
              disabled={demoButtonDisabled}
              onClick={() => {
                modalPlayerRef.current.onOpenModal();
              }}
              size="small"
              color="primary"
            >
              Demo
            </Button>
            <Link
              href={project.projectUrl}
              color="inherit"
              target="_blank"
              rel="noreferrer"
              underline="none"
            >
              <Button size="small" color="primary">
                Source Code
              </Button>
            </Link>
          </CardActions>
        </div>
      </div>
      <ModalPlayer
        videoUrl={project.demoUrl}
        ref={modalPlayerRef}
      ></ModalPlayer>
    </Card>
  );
}

export default SingleProject;
