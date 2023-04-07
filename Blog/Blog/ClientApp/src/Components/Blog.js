import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import { blog } from "../Content/BlogFeatured";
import { FiCard, FiCardActions, FiCardMedia } from "./FullImageCard";
import BackgroundImage from "../Images/background_motion.gif";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: "100%",
    height: 750,
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
  },
}));

const mainFeaturedPost = {
  ...blog.featuredPost,
  imgText: "main image description",
  linkText: "Continue reading…",
};

const sidebar = {
  title: "wescodes.tech",
  description: blog.about,
  social: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: blog.github,
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: blog.linkedIn,
    },
  ],
};

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <FiCard
          className={classes.card}
          style={{ border: "none", boxShadow: "none", width: "100%" }}
          square={true}
        >
          <FiCardMedia media="picture" image={BackgroundImage} />
          <FiCardActions className={classes.fiCardContent}>
            <Container maxWidth="md">
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    color="inherit"
                    variant="outlined"
                    style={{ backgroundColor: "rgba(0,0,0,.75)" }}
                  >
                    <div style={{ padding: "2rem" }}>
                      <Typography variant="h3">Projects</Typography>
                      <p />
                      <hr />
                      <p />
                      <Typography variant="body2">
                        Technology • Software • Design
                      </Typography>
                    </div>
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    size="large"
                    color="inherit"
                    variant="outlined"
                    style={{ backgroundColor: "rgba(0,0,0,.75)" }}
                    onClick={() => props.history.push("/about")}
                  >
                    <div style={{ padding: "2rem" }}>
                      <Typography variant="h3">Connect</Typography>
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
            </Container>
          </FiCardActions>
        </FiCard>
        <p />
        <Container maxWidth="lg">
          {/* <MainFeaturedPost post={mainFeaturedPost} history={props.history} />
          <Grid container spacing={4}>
            {blog.posts.map((post) => (
              <FeaturedPost
                key={post.title}
                post={post}
                history={props.history}
              />
            ))}
          </Grid> */}
          <div style={{ padding: "4rem" }}>
            <Container maxWidth="md">
              <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={5}>
                  <Typography
                    align="right"
                    variant="h2"
                    style={{ fontFamily: "palatino" }}
                  >
                    MY
                    <br />
                    MISSION
                  </Typography>
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ width: "8px" }}
                />
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" style={{ fontFamily: "helvetica" }}>
                    TO UTILIZE TECHNOLOGY FOR GOOD BY CONNECTING PEOPLE TO THEIR
                    WORLD, USING ENGINEERING PRINCIPLES TO SOLVE REAL-LIFE
                    PROBLEMS, AND TO NEVER STOP LEARNING BY CONTINUOUSLY HONING
                    MY CRAFT AND SKILLS IN THE LATEST TECHNOLOGICAL
                    DEVELOPMENTS.
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
