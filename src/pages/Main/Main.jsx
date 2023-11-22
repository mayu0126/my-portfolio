import React from 'react';
import Landing from '../../components/Landing';
import AboutMe from '../../components/AboutMe';
import Projects from '../../components/Projects/Projects';


function Main () {
    return (
        <div>
            <Landing />
            <AboutMe />
            <Projects />
        </div>
    );
}

export default Main;