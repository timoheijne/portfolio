import React from "react";

import {
    Redirect
  } from "react-router-dom";

import "./project.page.scss"
import ProjectSectionComponent from "./sectioncomponent/section.component";

export default class ProjectPage extends React.Component {
    
    constructor() {
        super()

        this.state = {
            project: {},
            isLoading: true,
            backToProjects: false
        }
    }

    componentDidMount() {
        console.log()

        fetch(`/projects/${this.props.match.params.project}.json`)
        .then(response => response.json())
        .then(projectData => { 
            projectData["permalink"] = this.props.match.params.project

            this.setState({
                project: projectData,
                isLoading: false,
            })
        }).catch(error => {
            console.error(error)

            console.log("Redirect back to projects page")
            this.setState({
                backToProjects: true,
                isLoading: false
            })
        })
    }

    renderProjectSections() {
        let sections = [];

        this.state.project.sections.forEach(section => {
            sections.push(<ProjectSectionComponent section={section} key={section.name} />)
        });

        return sections
    }

    renderLinks() {
        let links = [];

        this.state.project.links.forEach(link => {
            links.push(<li className="clickable" onClick={this.handleLinkClick.bind(this)} data-link={link.url}>{link.name}</li>)
        });

        return links     
    }

    renderTechnologies() {
        let technologies = [];

        this.state.project.technologies.forEach(tech => {
            if(tech.link !== undefined) {
                technologies.push(<li className="clickable" onClick={this.handleLinkClick.bind(this)} data-link={tech.link}>{tech.name} </li>)
            } else {
                technologies.push(<li>{tech.name}</li>)
            }
            
        });

        return technologies  
    }

    handleLinkClick(event) {
        window.open(event.currentTarget.dataset.link, '_blank')
    }

    render() {
        if(this.state.isLoading) return <div></div>;

        if(this.state.backToProjects) {
            return <Redirect to='/projects' />
        }

        return (
            <div id="project-page">
                <h1 id="page-header">{this.state.project.title}'s Overview</h1>

                <div id="project-root">
                    <div id="project-info">
                        {/* IMAGES */}
                        <div id="project-carousel">
                            <img src="https://via.placeholder.com/1920x1080" alt="Project"/>
                        </div>
                        
                        <div id="project-sections">
                            {this.renderProjectSections()}
                        </div>
                    </div>

                    <div id="project-sidebar">
                        <ul id="links">
                            {this.renderLinks()}
                        </ul>

                        <ul>
                            {this.renderTechnologies()}
                        </ul>
                    </div>    
                </div>

            </div>
        );
    }
}
  