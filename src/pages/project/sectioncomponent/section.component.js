
import React from "react";
import "./section.component.scss"
import ReactMarkdown from 'react-markdown'

const input = '**testing**'

export default class ProjectSectionComponent extends React.Component {

    constructor() {
        super()

        this.state = {
            section: {}
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            section: this.props.section
        })
    }

    render() {
        return (
            <div>
                <h2 className="section-title">{this.state.section.name}</h2>
                <hr />
                <ReactMarkdown escapeHtml={false} source={this.state.section.body} />
            </div>
        );
    }
}
  