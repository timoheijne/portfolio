import React from "react";

import "./projects.page.scss"
import ProjectComponent from "../../components/project/project.component";

export default class ProjectsPage extends React.Component {
    render() {
        return (
            <div id="project-page">
                <div><h1 id="page-header">Projects Page</h1></div>

                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
            </div>
        );
    }
}
  