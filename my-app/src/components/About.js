import React from "react";
import '../css/About.css';
import FadeIn from "react-fade-in/lib/FadeIn";

class About extends React.Component {
    render() {
        return (
            <div id = "about">
                <FadeIn>
                <div className="about-title">
                    About Me
                </div>
                </FadeIn>

                <div className="about-bio">
                    I'm currently studying Computer Science at the University of Illinois Urbana-Champaign and plan on graduating in 2024. My work specializes in Web Development and Data Science but I'm also interested in Quantitative Finance.
                </div>
            </div>
            
        );
    }
}

export default About;
