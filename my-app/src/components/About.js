import React from "react";
import '../css/About.css';
import FadeIn from "react-fade-in/lib/FadeIn";
import pdf from "../assets/AbhiVinnakotaResume.pdf";

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
                    Hi! I'm a freshman studying Computer Science at the University of Illinois Urbana-Champaign (<a href = "https://cs.illinois.edu/">UIUC</a>). My main interests are quantitative finance and machine learning. To this end, I'm currently a Software Developer for the Quantitative Finance (<a href = "https://uiucquant.web.illinois.edu/">Quant</a>) Club at UIUC. I also enjoy web development and mainly use React.   
                </div>

                <br>
                </br>

                <div className="about-bio">
                Please refer to my <a href = {pdf}>resume</a> for my credentials and check out my <a href = "https://www.github.com/abhi-vinnakota">GitHub</a> to see some of my projects! I would love to talk as well, so feel free to reach out to me!
                </div>
            </div>
            
        );
    }
}

export default About;
