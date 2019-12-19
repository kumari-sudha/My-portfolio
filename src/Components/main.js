import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import AboutMe from "./aboutme";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";

const main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/contact" component={Contact}/>
  </Switch>
)

export default main;
