import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

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
        <div>
          <Header title="Home" sections={sections} history={history} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
        </div>

        <Footer title="" description="Websites by Wesley R. Howell" />
      </React.Fragment>
    </Router>
  );
}

export default App;
