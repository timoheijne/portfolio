
import React from "react";
import "./section.component.scss"
import ReactMarkdown from 'react-markdown'

const input = '**testing**'

export default class ProjectSectionComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 class="section-title">Title</h2>
                <hr />
                <ReactMarkdown escapeHtml={false} source={input} />
            </div>
        );
    }
}
  