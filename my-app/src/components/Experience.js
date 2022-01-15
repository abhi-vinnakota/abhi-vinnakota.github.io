import React from 'react';
import '../css/Experience.css'
import '@fortawesome/react-fontawesome'
import VerticalTabs from './VerticalTabs'
class Experience extends React.Component {
    render() {
        
        return (
            <div id = "experience">
                <div className='experiences-title'>
                    Experience
                </div>

                <div className='experiences-subtitle'>
                    My favorite languages are Javascript, C++, and Python. At my internships, I've focused mainly on web development, but I'm also interested in exploring other areas as well. I definitely would love to dive into APIs and app development, among other things.  
                </div>

                <div className='experience-list'>
                    <VerticalTabs/>
                </div>

                <div className ='experiences-subtitle'>
                    Check out my resume for detailed summaries of my work.
                </div>
            </div>
        );
        
    }
}

export default Experience;