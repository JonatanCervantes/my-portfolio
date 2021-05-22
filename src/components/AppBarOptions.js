import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Link as ReactScrollLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    paddingBlock: theme.spacing(1),
  },
  active: {
    borderBottom: "2px solid #08C7D6",
  },
  rsStyle: {
    width: "100%",
    height: "100%",
  },
}));

function AppBarOptions() {
  const theme = useTheme();
  const classes = useStyles();

  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (matches) {
    return (
      <div>
        <ReactScrollLink
          activeClass={classes.active}
          to="about"
          spy={true}
          smooth={true}
          className={classes.buttonStyle}
        >
          <Button color="inherit">About</Button>
        </ReactScrollLink>

        <ReactScrollLink
          activeClass={classes.active}
          to="skills"
          spy={true}
          smooth={true}
          className={classes.buttonStyle}
        >
          <Button color="inherit">Skills</Button>
        </ReactScrollLink>
        <ReactScrollLink
          activeClass={classes.active}
          to="projects"
          spy={true}
          smooth={true}
          className={classes.buttonStyle}
        >
          <Button color="inherit">Projects </Button>
        </ReactScrollLink>
      </div>
    );
  } else {
    return (
      <div>
        <IconButton
          aria-controls="options-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <ReactScrollLink
              activeClass={classes.active}
              to="about"
              spy={true}
              smooth={true}
              onClick={handleClose}
            >
              <Button color="inherit">About</Button>
            </ReactScrollLink>
          </MenuItem>
          <MenuItem>
            <ReactScrollLink
              activeClass={classes.active}
              to="skills"
              spy={true}
              smooth={true}
              onClick={handleClose}
            >
              <Button color="inherit">Skills</Button>
            </ReactScrollLink>
          </MenuItem>

          <MenuItem>
            <ReactScrollLink
              activeClass={classes.active}
              to="projects"
              spy={true}
              smooth={true}
              onClick={handleClose}
            >
              <Button color="inherit">Projects </Button>
            </ReactScrollLink>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default AppBarOptions;
