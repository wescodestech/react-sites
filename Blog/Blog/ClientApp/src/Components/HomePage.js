import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Sidebar from "./Sidebar";
import { blog } from "../Content/BlogFeatured";
import {
  FiCard,
  FiCardContent,
  FiCardActions,
  FiCardMedia,
} from "./FullImageCard";
import BackgroundImage from "../Images/motion_background.mp4";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: 700,
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
}));

const sidebar = {
  title: "wescodes.tech",
  description: blog.about,
  social: [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: blog.linkedIn,
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: blog.github,
    },
  ],
};

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <FiCard
          className={classes.card}
          style={{ border: "none", boxShadow: "none", width: "100%" }}
          square={true}
        >
          <FiCardMedia>
            <video
              className="VideoTag"
              playsInline
              autoPlay
              loop
              muted
              width="100%"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={BackgroundImage} type="video/mp4" />
            </video>
          </FiCardMedia>
          <FiCardContent className={classes.fiCardContent}>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              style={{
                fontFamily: "helvetica",
                textShadow: "4px 4px 8px #000000",
              }}
            >
              Wesley R. Howell
            </Typography>
            <Typography
              variant="h5"
              className={classes.fiCardContentTextSecondary}
              component="p"
              style={{
                fontFamily: "helvetica",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              Software Engineer | Architect | Leader | Lifelong Learner
            </Typography>
          </FiCardContent>
          <FiCardActions className={classes.fiCardContent}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={9}></Grid>
              <Grid item xs={12} md={3}>
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="outlined"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgba(0,0,0,.50)",
                  }}
                  onClick={() => props.history.push("/about")}
                >
                  <div style={{ padding: "2rem" }}>
                    <Typography variant="h5">Connect With Me</Typography>
                    <p />
                    <hr />
                    <p />
                    <Typography variant="body2">
                      Introduction • History • Contact
                    </Typography>
                  </div>
                </Button>
              </Grid>
            </Grid>
          </FiCardActions>
        </FiCard>
        <p />
        <Container maxWidth="lg">
          <div style={{ padding: "4rem" }}>
            <Container maxWidth="md">
              <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography
                    align="right"
                    variant="h4"
                    style={{ fontFamily: "helvetica" }}
                  >
                    SOFTWARE
                    <br />
                    DEVELOPMENT
                    <br />
                    QUALITY
                    <br />
                    SECURITY
                  </Typography>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ width: "8px" }}
                />
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" style={{ fontFamily: "helvetica" }}>
                    ALWAYS STRIVE TO UTILIZE TECHNOLOGY FOR GOOD, CONNECT PEOPLE
                    TO THEIR WORLD, USE ENGINEERING PRINCIPLES TO SOLVE
                    REAL-LIFE PROBLEMS, AND NEVER STOP LEARNING BY DEVELOPING
                    SKILLS IN THE LATEST TECHNOLOGICAL DEVELOPMENTS.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
          <Grid container spacing={12} className={classes.mainGrid}>
            <Sidebar
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
