import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../Images/icon.png";
import Bg from "../Images/bg.jpeg";

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
  const { sections } = props;
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

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        style={{
          background: "slategrey",
          backgroundImage: `url(${Bg})`,
          backgroundSize: "100%",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              color="inherit"
              align="center"
              style={{
                fontFamily: "monospace",
                padding: "10px",
                noWrap: {
                  textOverflow: "clip",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                },
              }}
              className={classes.toolbarTitle}
            >
              <img src={Logo} alt="wescodes.tech" height="56px" align="right" />
              WesCodes.tech
            </Typography>
          </ThemeProvider>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <Button
              focusRipple
              focusVisibleClassName={classes.focusVisible}
              key={section.title}
              onClick={() => props.history.push(section.url)}
              className={classes.image}
              style={{
                color: "whiteSmoke",
                textTransform: "none",
              }}
              fullWidth
            >
              <span className={classes.imageBackdrop} />
              <Typography variant="subtitle1">{section.title}</Typography>
              <span className={classes.imageMarked} />
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.offset} />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
