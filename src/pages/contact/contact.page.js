import React from "react";

import "./contact.page.scss"

import {
    Link
} from "react-router-dom";

export default class ContactPage extends React.Component {
    render() {
        return (
            <div id="contact-page">
                <div><h1 id="page-header">Contact Page</h1></div>

                
                <div id="contact-buttons">
                    <a target="_blank" href="https://github.com/timoheijne">Github</a>
                    <a target="_blank" href="https://www.linkedin.com/in/timoheijne/">LinkedIn</a>
                    <a target="_blank" href="https://keybase.io/TimoHeijne">Keybase</a>
                    <a href="mailto:me@timoheijne.nl">Email (me@timoheijne.nl)</a>
                </div>
            </div>
        );
    }
}
  