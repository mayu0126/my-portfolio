import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects/Projects';



function Main () {
    return (
        <div>
            <Landing id='landing'/>
            <AboutMe id='aboutme'/>
            <Projects id='projects'/>
        </div>
    );
}

export default Main;