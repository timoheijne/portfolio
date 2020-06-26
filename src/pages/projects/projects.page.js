import React from "react";

import "./projects.page.scss"
import ProjectComponent from "../../components/project/project.component";

export default class ProjectsPage extends React.Component {
    projects = [];

    constructor() {
        super()

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch("/projects/manifest.json")
        .then(response => response.json())
        .then(jsonData => {

            jsonData["projects"].forEach(project => {
                fetch(`/projects/${project}.json`)
                .then(response => response.json())
                .then(projectData => { 
                    
                    this.projects.push(projectData)
                    this.setState({
                        projects: this.projects
                    })
                }).catch(error => {
                    console.error(error)
                })
            });

        }).catch(error => {
            console.error(error)
        })
    }

    getProjectList() {
        let list = [];
        this.state.projects.forEach(project => {
            console.log(project)
            list.push(<ProjectComponent project={project} />)
        });

        console.log(list)

        return list
    }

    render() {
        console.log(this.projects)
        return (
            <div id="projects-page">
                <div><h1 id="page-header">Projects Page</h1></div>
                
                {this.getProjectList()}
            </div>
        );
    }
}
  