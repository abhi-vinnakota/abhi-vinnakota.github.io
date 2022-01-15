import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Colors.css'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);