import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginInline: theme.spacing(1),
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
  const [isFlipped, setIsFlipped] = useState(false);
  const project = props.project;
  const classes = useStyles();
  return (
    <Card>
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
                onMouseEnter={() => setIsFlipped((prev) => !prev)}
                className="CardFront"
              >
                {project.skills.map((technology, index) => (
                  <Typography
                    key={`Technology${index}`}
                    variant="body2"
                    // color="textSecondary"
                    component="p"
                  >
                    {technology}
                  </Typography>
                ))}{" "}
              </div>
              <div
                onMouseLeave={() => setIsFlipped((prev) => !prev)}
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
          {" "}
          <CardActions>
            <Button size="small" color="primary">
              Description
            </Button>
            <Button size="small" color="primary">
              Demo
            </Button>
            <Button size="small" color="primary">
              Source Code{" "}
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SingleProject;
