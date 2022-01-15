import React from "react";
import '../css/Intro.css';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";
import ArticleIcon from '@mui/icons-material/Article';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FadeIn from 'react-fade-in';
import pdf from '../assets/AbhiVinnakotaResume.pdf';

class Intro extends React.Component {
    render() {
        return (
            <div id = "intro">
                
                    <Typist>
                        <span className="title">
                            {"Hi, I'm "}
                            <span className="name">{"Abhi Vinnakota."}</span>
                        </span>
                        
                    </Typist>
                <FadeIn delay={1000}>

                <span className="sub-title">
                    Student and Software Developer
                </span>
                    <div className = "bio">
                        Welcome to my website! I'm currently looking for Software Engineering internships for Summer 2022. Please refer to my resume for more information.
                    </div>
                
                
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

                    <a href = {pdf}>
                        <ArticleIcon style = {{fontSize: 50}}></ArticleIcon>
                    </a>

                </div>
                </FadeIn>

            </div>
        );
    }
}

export default Intro;