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
import ProjectPage from "./pages/project/project.page";

export default function App() {
  return (
    <Router>
      <div>
      <NavbarComponent />
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/project/:project" component={ProjectPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}