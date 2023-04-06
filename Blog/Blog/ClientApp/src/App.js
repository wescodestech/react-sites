import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import AboutPage from "./Components/AboutPage";
import Story from "./Components/Story";

import "./App.css";

const sections = [
  { title: "Home", url: "/" },
  // { title: "Blog Archive", url: "/" },
  { title: "About Me", url: "/about" },
];
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <React.Fragment>
        <div style={{ padding: "0.5em" }}>
          <Header title="Blog" sections={sections} history={history} />

          <Route path="/about" component={AboutPage} />
          <Route path="/blog/:id" component={Story} />
          <Route exact path="/" component={Blog} />
        </div>

        <Footer title="" description="Websites by Wesley R. Howell" />
      </React.Fragment>
    </Router>
  );
}

export default App;
