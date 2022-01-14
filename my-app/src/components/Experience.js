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
                    I'm currently a Freshman at UIUC and I hope to gain more experience throughout college. I love building things and being exposed to new technologies. 
                </div>

                <div className = 'experiences-subtitle'>
                Here are my former + current positions:
                </div>

                <div className='experience-list'>
                    <VerticalTabs/>
                </div>

                <div className ='experiences-subtitle'>
                    Checkout my resume for detailed summaries of my work.
                </div>
            </div>
        );
        
    }
}

export default Experience;