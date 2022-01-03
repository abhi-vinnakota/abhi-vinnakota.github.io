import React from 'react';
import '../css/Contact.css'
import ArticleIcon from '@mui/icons-material/Article';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

class Contact extends React.Component {
    render() {
        return (
            <div id = "contact">
                <div className='contact-title'>
                    Reach Out!
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

                    <a href = "AbhiVinnakotaResume.pdf">
                        <ArticleIcon style = {{fontSize: 50}}></ArticleIcon>
                    </a>

                </div>
            </div>
        );
    }
}

export default Contact;