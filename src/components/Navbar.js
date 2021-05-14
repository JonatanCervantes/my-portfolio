import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Link,
  Avatar,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import jcLogo from "../assets/images/jc-logo.png";
import { Link as ReactScrollLink } from "react-scroll";

const LINKEDIN_URL = "https://www.linkedin.com/in/jonatan-cervantes/";
const GITHUB_URL = "https://github.com/JonatanCervantes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginInline: theme.spacing(2),
  },
  logoStyle: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarStyle: {
    // background: "transparent",
    background:
      "radial-gradient(circle, rgba(23,24,24,1) 50%, rgba(28,33,36,1) 90%)",
    boxShadow: "none",
  },
  active: {
    borderBottom: "2px solid #08C7D6",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle} position="fixed" elevation={0}>
        <Toolbar>
          <div className={classes.logoStyle}>
            <ReactScrollLink to="heroImage" spy={true} smooth={true}>
              <IconButton color="inherit">
                <Avatar src={jcLogo} variant="square"></Avatar>
              </IconButton>
            </ReactScrollLink>
          </div>

          <ReactScrollLink
            activeClass={classes.active}
            to="about"
            spy={true}
            smooth={true}
          >
            <Button color="inherit"> About </Button>
          </ReactScrollLink>

          <ReactScrollLink
            activeClass={classes.active}
            to="skills"
            spy={true}
            smooth={true}
          >
            <Button color="inherit">Skills</Button>
          </ReactScrollLink>
          <ReactScrollLink
            activeClass={classes.active}
            to="projects"
            spy={true}
            smooth={true}
          >
            <Button color="inherit">Projects </Button>
          </ReactScrollLink>
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
