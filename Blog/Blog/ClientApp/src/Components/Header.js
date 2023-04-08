import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../Images/header-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  appbar: {
    colorPrimary: "rgb(115, 140, 165)",
  },
  offset: theme.mixins.toolbar,
  image: {
    position: "relative",

    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.3,
      },
      "& $imageMarked": {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "whiteSmoke",
    opacity: 0,
    transition: theme.transitions.create("opacity"),
  },
  imageMarked: {
    height: 3,
    width: 50,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 25px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseHome = () => {
    setAnchorEl(null);
    props.history.push("/");
  };
  const handleCloseAbout = () => {
    setAnchorEl(null);
    props.history.push("/about");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{
          background: "rgb(47,57,72)",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <ThemeProvider theme={theme}>
            <img src={Logo} alt="wescodes.tech" height="56px" align="left" />

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ marginLeft: "auto" }}
            >
              <MenuIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseHome}>Home</MenuItem>
              <MenuItem onClick={handleCloseAbout}>Connect</MenuItem>
            </Menu>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
