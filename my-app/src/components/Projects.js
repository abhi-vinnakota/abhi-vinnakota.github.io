import React from 'react';
import '../css/Projects.css'
import project1 from '../assets/mehta.png'
import project2 from '../assets/personalwebsite.png'
class Projects extends React.Component {
    render() {
        return (
            <div id = "projects">
                <div className='projects-title'>
                    Projects
                </div>
                
                <div class = "projects-row">

    <div class = "projects-col">
      <div class = "grid-item">
        <div class="card">
          <img class="card-img" src={project1} alt="Mehta Lab"/>
          <div class="card-content">
            <h1 class="card-header">Mehta Lab Website</h1>
            <p class="card-text">
              HTML, CSS, JS, d3
            </p>
            <form action = "https://github.com/abhi-vinnakota/d3-notebook-visualization-website">
            <button class="card-btn">GitHub <span>&rarr;</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class = "projects-col">
      <div class = "grid-item">
        <div class="card">
          <img class="card-img" src={project2} alt="Personal Website" />
          <div class="card-content">
            <h1 class="card-header">Personal Website</h1>
            <p class="card-text">
              ReactJS
            </p>
            <form action = "https://github.com/abhi-vinnakota/abhi-vinnakota.github.io">
            <button class="card-btn">GitHub <span>&rarr;</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
                
            </div>
        );
    }
}

export default Projects;