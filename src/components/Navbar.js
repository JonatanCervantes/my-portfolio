import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Link,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link as ReactScrollLink } from "react-scroll";

const LINKEDIN_URL = "https://www.linkedin.com/in/jonatan-cervantes/";
const GITHUB_URL = "https://github.com/JonatanCervantes";

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
  appBarStyle: {
    background: "transparent",
    boxShadow: "none",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle} position="static" elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <ReactScrollLink
              activeClass="active"
              to="heroImage"
              spy={true}
              smooth={true}
            >
              JC
            </ReactScrollLink>
          </Typography>
          <Button color="inherit">
            <ReactScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </ReactScrollLink>
          </Button>
          <Button color="inherit">
            <ReactScrollLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
            >
              Skills
            </ReactScrollLink>
          </Button>
          <Button color="inherit">
            <ReactScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
            >
              Projects
            </ReactScrollLink>
          </Button>
          <Link
            href={LINKEDIN_URL}
            color="inherit"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton className={classes.menuButton} color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link
            href={GITHUB_URL}
            color="inherit"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton className={classes.menuButton} color="inherit">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
