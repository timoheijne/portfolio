
import React from "react";
import "./carousel.component.scss"


export default class CarouselComponent extends React.Component {
    
    constructor() {
        super()

        this.state = {
            images: [],
            imageDOM: [],
            currentActive: 0
        }
    }

    componentDidMount() {        
        let dom = [];
        // Populate image dom
        for (let i = 0; i < this.props.images.length; i++) {
            const image = this.props.images[i];
            let classes = "carrousel-image";
            if(i !== 0) {
                classes += " hidden"
            }

            dom.push( <img key={i} className={classes} src={image} alt="Project"/>)    
        }

        this.setState({
            ...this.state,
            images: this.props.images,
            imageDOM: dom
        })

        setInterval(() => this.nextItem(), 5000)
    }

    nextItem() {
        let imageDOM = this.state.imageDOM
        let curActive = imageDOM[this.state.currentActive];

        imageDOM[this.state.currentActive] = <img key={curActive.key} className="carrousel-image hidden" src={curActive.props.src} alt="Project"/>

        let next = this.state.currentActive + 1;
        if(this.state.currentActive >= imageDOM.length-1) {
            next = 0;
        }

        imageDOM[next] = <img key={imageDOM[next].key} className="carrousel-image" src={imageDOM[next].props.src} alt="Project"/>
        this.setState({
            ...this.props,
            currentActive: next,
            imageDOM: imageDOM
        })

    }

    render() {
        return (
            <div id="carrousel-root">
               {this.state.imageDOM}
            </div>
        );
    }
}
  