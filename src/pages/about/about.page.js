import React from "react";

import "./about.page.scss"

export default class AboutPage extends React.Component {
    render() {
        return (
            <div id="about-page">
                <div><h1 id="page-header">About Page</h1></div>

                <div id="about-display">
                    <div id="about-image">
                        <img src="/images/about-me.jpg" alt="Timo Heijne" />
                    </div>

                    <div  id="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet urna aliquet, tincidunt augue quis, porttitor tortor. In eu finibus lorem. Integer auctor dignissim volutpat. Suspendisse potenti. Nullam sagittis urna laoreet ex aliquam, egestas egestas libero luctus. Cras nisi leo, sagittis at mauris eu, fringilla condimentum est. In cursus arcu ac nulla lobortis, sed tempus velit consequat. Praesent sed sapien at erat dapibus varius. Quisque eleifend sed dolor quis pharetra.

                    Quisque dolor risus, pellentesque a risus vel, ullamcorper dapibus augue. In orci orci, fringilla non magna in, mollis vulputate justo. Nunc eget odio vitae lectus mollis pretium quis eget erat. Aenean a dignissim arcu. Suspendisse quis dui vitae ipsum sollicitudin sollicitudin. Sed ultricies augue quis turpis imperdiet dignissim. Nullam lorem lorem, vulputate rhoncus ullamcorper at, vulputate nec mi. Donec sed gravida sem. Mauris lacus orci, aliquam non est in, suscipit iaculis urna.

                    Nunc luctus placerat elit, eget hendrerit diam tempor non. Nullam vitae nibh lacinia, iaculis nisl at, volutpat dui. Donec nec dolor semper arcu ullamcorper tempor. Mauris rhoncus dui eu convallis tempor. Phasellus congue sapien porta euismod scelerisque. In ligula mauris, varius gravida lorem iaculis, tristique volutpat purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dignissim tristique tellus vel ultrices. Nulla rhoncus condimentum sapien vel cursus. Pellentesque dapibus libero eu orci sagittis, id faucibus ligula ultricies. Donec volutpat, nulla a vehicula maximus, ipsum arcu dignissim sapien, nec fermentum ipsum sapien sit amet massa. Phasellus ornare, ante nec pellentesque laoreet, est purus finibus odio, ut gravida purus magna vitae enim.

                    Nulla auctor turpis eu lectus aliquam molestie. Nam neque dui, cursus sit amet tortor et, eleifend dapibus sem. Phasellus in tempus mauris. Ut lacinia dignissim ante eget sollicitudin. Praesent mattis vestibulum velit vitae euismod. Morbi a neque dapibus, rhoncus sem a, facilisis lacus. Aenean sed metus in nisl rhoncus ultrices nec a est. 
                    </div>
                </div>

            </div>
        );
    }
}
  