import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';
import { Accordion, Container, Row } from 'react-bootstrap';

// Create component that renders all ProjectList from the json file
const ProjectList = () => {
    const [projectList, setProjectList] = useState([]);
    useEffect(() => {
        axios.get('json/projects.json')
            .then(response => {
                setProjectList(response.data);
            });
    }, []);

    return (
        <Container as="article" id="projects">
            <Row>
                <div className="page-header">
                    <h1>Jobs & Projects</h1>
                </div>
            </Row>
            <Row>
                <Accordion>
                    {projectList.map(project => (
                        <Project project={project} key={project.id} />
                    ))}
                </Accordion>
            </Row>
        </Container>
    );
};

export default ProjectList;