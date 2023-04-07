import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <React.Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        <a href="https://wescodes.tech">https://wescodes.tech</a>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear()} • All Rights Reserved
      </Typography>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(2, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
        <p />
        <Typography
          variant="caption"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
