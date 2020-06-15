import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home/home.page' 
import About from './pages/about/about.page' 
import Contact from './pages/contact/contact.page' 
import Projects from './pages/projects/projects.page' 
import NavbarComponent from "./components/navbar/navbar.component"

export default function App() {
  return (
    <Router>
      <div>
      <NavbarComponent />
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}