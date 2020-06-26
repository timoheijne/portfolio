import React from "react";

import "./project.page.scss"
import ReactMarkdown from 'react-markdown/with-html'

const input = '## Test <hr>'

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
                            <div class="project-section">
                                <ReactMarkdown escapeHtml={false} source={input} />
                            </div>
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
  