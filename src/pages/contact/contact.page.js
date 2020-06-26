import React from "react";

import "./contact.page.scss"

export default class ContactPage extends React.Component {
    render() {
        return (
            <div id="contact-page">
                <div><h1 id="page-header">Contact Page</h1></div>

                
                <div id="contact-buttons">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/timoheijne">Github</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/timoheijne/">LinkedIn</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://keybase.io/TimoHeijne">Keybase</a>
                    <a href="mailto:me@timoheijne.nl">Email (me@timoheijne.nl)</a>
                </div>
            </div>
        );
    }
}
  