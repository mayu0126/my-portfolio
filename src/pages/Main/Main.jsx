import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects';
import Education from '../../components/Education';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';


function Main () {
    return (
        <div>
            <Landing id='landing'/>
            <AboutMe id='aboutme'/>
            <Projects id='projects'/>
            <Education id='education'/>
            <Skills id='skills'/>
            <Experience id='experience'/>
            <Contact id='contact'/>
        </div>
    );
}

export default Main;