import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import { blog } from "../Content/BlogFeatured";
import { FiCard, FiCardContent, FiCardMedia } from "./FullImageCard";
import BackgroundImage from "../Images/background_motion.gif";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    maxWidth: "100%",
    height: 750,
  },
  media: {
    height: 140,
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
  title: "About",
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
        {/* <FiCard
          className={classes.card}
          style={{ border: "none", boxShadow: "none" }}
          square={true}
        >
          <FiCardMedia media="picture" image={BackgroundImage} />
          <FiCardContent className={classes.fiCardContent}>
            <Typography variant="h1">Welcome! </Typography>
            <Typography variant="body1">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </FiCardContent>
        </FiCard>
        <p /> */}
        <Container maxWidth="xl">
          <MainFeaturedPost post={mainFeaturedPost} history={props.history} />
          <Grid container spacing={4}>
            {blog.posts.map((post) => (
              <FeaturedPost
                key={post.title}
                post={post}
                history={props.history}
              />
            ))}
          </Grid>
          <Grid container spacing={12} className={classes.mainGrid}>
            <Sidebar
              title={sidebar.title}
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
