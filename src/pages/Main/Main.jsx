import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects/Projects';
import Education from '../../components/Education/Education';



function Main () {
    return (
        <div>
            <Landing id='landing'/>
            <AboutMe id='aboutme'/>
            <Projects id='projects'/>
            <Education id='education'/>
        </div>
    );
}

export default Main;