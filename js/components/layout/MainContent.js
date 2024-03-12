import React from 'react';
import Contact from '../Contact';
import Projects from '../Projects';
import Skills from '../Skills';

const MainContent = () => {
    return (
        <section class="container-fluid" id="content">
            <Contact />
            <Projects />
            <Skills />
        </section>
    )
}

export default MainContent;
