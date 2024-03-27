import React from 'react';
import Contact from '../Contact';
import ProjectList from '../ProjectList';
import SkillsList from '../SkillsList';
import Container from 'react-bootstrap/Container';

const MainContent = () => {
    return (
        <Container fluid id="content" key="content" as="section">
            <Contact />
            <ProjectList />
            <SkillsList />
        </Container>
    )
}

export default MainContent;
