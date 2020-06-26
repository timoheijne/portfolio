
import React from "react";
import "./project.component.scss"
import ReactMarkdown from 'react-markdown'

import {
    Link
} from "react-router-dom";

const input = '**testing**'

export default class ProjectComponent extends React.Component {
    render() {
        return (
            <div>
                <div class="project">
                    <div class="info-side">
                        <h3 class="header">Project Name</h3>

                        <div class="info">
                            <ReactMarkdown source={input} />
                        </div>
                    </div>
                    
                    <div class="image-side">
                        <img src="https://via.placeholder.com/500x300" alt="Project Foto"></img>
                    </div> 
                </div>

                <div class="learn-more">
                    <Link class="learn-more-button">Learn More</Link>
                </div>
            </div>
            
        );
    }
}
  