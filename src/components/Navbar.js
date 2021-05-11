import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginInline: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              JC
            </Typography>
            <Button color="inherit">About me</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Projects</Button>

            <IconButton className={classes.menuButton} color="inherit">
              <LinkedInIcon />
            </IconButton>

            <IconButton className={classes.menuButton} color="inherit">
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
