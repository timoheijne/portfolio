import React from "react";

import "./home.page.scss"

export default class HomePage extends React.Component {
    whatAmIOptions = [
        "Software Engineer",
        "Backend Developer",
        "Game Developer",
        "Cloud Engineer",
        "Devops Enthousiast"
    ]

    currentItem = "Software Engineer"
    whatAmI = ""

    render() {
        return (
            <div id="main">
                <img src="/images/myself.png" alt="Test"></img>
                <div id="me">
                    <h1>Hello</h1>
                    <h2>I'm Timo Heijne</h2>
                    <h3>{ this.whatAmI }</h3>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.nextItem()
    }

    nextItem() {
        let i = this.whatAmIOptions.indexOf(this.whatAmI)
        i++

        if(i > this.whatAmIOptions.length - 1) {
            i = 0
        }

        this.currentItem = this.whatAmIOptions[i]
        this.whatAmI = this.currentItem[0]

        this.typeItem()
    }

    typeItem() {
        if (this.currentItem[this.whatAmI.length] === undefined) {
            setTimeout(() => this.nextItem(), 500)
            return
        }
        
        this.whatAmI += this.currentItem[this.whatAmI.length]

        this.forceUpdate()

        setTimeout(() => this.typeItem(), 100)
    }
}
  