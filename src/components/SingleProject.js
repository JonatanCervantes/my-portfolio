import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    marginTop: theme.spacing(1),
    // marginInline: theme.spacing(1),
  },
  media: {
    height: 90,
    width: 90,
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
  },
  cardFooter: {
    marginTop: "auto",
  },
}));

function SingleProject(props) {
  const buttonTexts = ["Description", "Technologies"];
  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonText, setButtonText] = useState(buttonTexts[0]);
  const project = props.project;
  const classes = useStyles();

  const flipCard = () => {
    if (isFlipped) setButtonText(buttonTexts[0]);
    else setButtonText(buttonTexts[1]);
    setIsFlipped((prev) => !prev);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.flexContainer}>
        <CardActionArea>
          <div className={classes.iconContainer}>
            <CardMedia
              className={classes.media}
              image={project.imageUrl}
              title={project.title}
            />
          </div>
          <CardContent className={classes.textContainer}>
            <Typography gutterBottom variant="h5">
              {project.title}
            </Typography>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div
                // onMouseEnter={() => setIsFlipped((prev) => !prev)}
                className="CardFront"
              >
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
              <div
                // onMouseLeave={() => setIsFlipped((prev) => !prev)}
                className={"CardBack"}
              >
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </div>
            </ReactCardFlip>
          </CardContent>
        </CardActionArea>
        <div className={classes.cardFooter}>
          <CardActions>
            <Button
              // onClick={() => setIsFlipped((prev) => !prev)}
              onClick={() => flipCard()}
              size="small"
              color="primary"
            >
              {buttonText}
            </Button>
            <Button size="small" color="primary">
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
    </Card>
  );
}

export default SingleProject;
