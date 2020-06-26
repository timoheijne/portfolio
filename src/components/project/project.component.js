
import React from "react";
import "./project.component.scss"
import ReactMarkdown from 'react-markdown'

import {
    Link
} from "react-router-dom";

export default class ProjectComponent extends React.Component {
    
    // TODO: Check if input was good, if not. Don't load this project

    render() {
        return (
            <div>
                <div className="project">
                    <div className="info-side">
                        <h3 className="header">{this.props.project["title"]}</h3>

                        <div className="info">
                            <ReactMarkdown source={this.props.project["summary"]}  />
                        </div>
                    </div>
                    
                    <div className="image-side">
                        <img src="https://via.placeholder.com/500x300" alt="Project Foto"></img>
                    </div> 
                </div>

                <div className="learn-more">
                    <Link to={`/project/${this.props.project["permalink"]}`} className="learn-more-button">Learn More</Link>
                </div>
            </div>
            
        );
    }
}
  