import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Logo from "../Images/header-logo-alt.png";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { description, social } = props;

  return (
    <Grid item xs={12}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <div align="center">
          <img src={Logo} alt="wescodes.tech" height="75px" align="center" />
        </div>{" "}
        <br />
        <Typography align="center">{description}</Typography>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
          align="center"
        >
          Find Me On
        </Typography>
        {social.map((network) => (
          <Link variant="body1" href={network.url} key={network}>
            <Grid container direction="row" spacing={1} justify="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
