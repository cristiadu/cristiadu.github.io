import React from 'react';
import Contact from '../Contact';
import ProjectList from '../ProjectList';
import SkillsList from '../SkillsList';

const MainContent = () => {
    return (
        <section className="container-fluid" id="content">
            <Contact />
            <ProjectList />
            <SkillsList />
        </section>
    )
}

export default MainContent;
