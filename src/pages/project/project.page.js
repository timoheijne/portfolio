import React from "react";

import "./project.page.scss"
import ProjectSectionComponent from "./sectioncomponent/section.component";

export default class ProjectPage extends React.Component {
    render() {
        return (
            <div id="project-page">
                <h1 id="page-header">NAME Overview</h1>

                <div id="project-root">
                    <div id="project-info">
                        {/* IMAGES */}
                        <div id="project-carousel">
                            <img src="https://via.placeholder.com/1920x1080" alt="Project"/>
                        </div>
                        
                        <div id="project-sections">
                            <ProjectSectionComponent />
                        </div>
                    </div>

                    <div id="project-sidebar">
                        <ul>
                            <li>Link Item</li>
                            <li>Link Item</li>
                            <li>Link Item</li>
                            <li>Link Item</li>
                            <li>Link Item</li>
                        </ul>

                        <ul>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                            <li>Tech Item</li>
                        </ul>
                    </div>    
                </div>

            </div>
        );
    }
}
  