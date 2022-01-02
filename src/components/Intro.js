import React from "react";
import '../css/Intro.css';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FadeIn from 'react-fade-in';
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
    render() {
        return (
            <div id = "intro">
                
                    <Typist>
                        <span className="title">
                            {"Hi, I'm "}
                            <span className="name">{"Abhi"}</span>
                        </span>
                        
                    </Typist>
                <FadeInSection>
                    <div className = "bio">
                        I'm a Software Developer who is interested in full-stack development and machine learning.
                    </div>
                </FadeInSection>
                <div className="social-icons">
                    <a href = "mailto:asv7@illinois.edu">
                        <EmailRoundedIcon style ={{fontSize: 50}}></EmailRoundedIcon>
                    </a>

                    <a href = "https://www.linkedin.com/in/abhivinnakota">
                        <LinkedInIcon style = {{fontSize: 50}}></LinkedInIcon>
                    </a>

                    <a href = "https://www.github.com/abhi-vinnakota">
                        <GitHubIcon style = {{fontSize: 50}}></GitHubIcon>
                    </a>

                    <a href = "https://twitter.com/AbhiVinnakota">
                        <TwitterIcon style = {{fontSize: 50}}></TwitterIcon>
                    </a>

                </div>

            </div>
        );
    }
}

export default Intro;