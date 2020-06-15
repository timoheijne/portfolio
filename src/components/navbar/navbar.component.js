import React from "react";
import "./navbar.component.scss"

import {
    Link
  } from "react-router-dom";

export default class NavbarComponent extends React.Component {
    render() {
        return (
        <nav>
            <div>
                <Link to="/">HOME</Link>   
                <Link to="/projects">PROJECTS</Link> 
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </nav>
        );
    }
}
  