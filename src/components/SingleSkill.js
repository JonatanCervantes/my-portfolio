import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { MyIcons } from "./MyIcons";

const FILL = "white";
const STROKE = "white";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
  svgIcons: {
    height: "10vh",
    width: "10vw",
  },
  flexContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // padding: theme.spacing(2),
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "auto",
  },

  cardBackground: {
    backgroundColor: "transparent",
    opacity: "0.9",
    // padding: theme.spacing(1),
    // border: "3px solid",
    // borderColor: theme.palette.text.secondary,
  },
}));

function SingleSkill(props) {
  const classes = useStyles();
  const skill = props.skill;

  return (
    <Card className={classes.cardBackground} elevation={0}>
      <div className={classes.flexContainer}>
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
            <Typography key={`Skill${index}`} variant="body2" component="p">
              {technology}
            </Typography>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}

export default SingleSkill;
