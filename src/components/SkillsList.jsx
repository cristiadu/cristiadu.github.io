import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skill from './Skill';
import { Container, Row } from 'react-bootstrap';

// Create component that renders all skills from the json file
const SkillsList = () => {
    const [skillsList, setSkillsList] = useState([]);
    useEffect(() => {
        axios.get('json/skills.json')
            .then(response => {
                setSkillsList(response.data);
            });
    }, []);

    return (
        <Container as="article" id="skills">
            <Row>
                <div className="page-header">
                    <h1>Main Skills</h1>
                </div>
            </Row>
            <Row>
                {skillsList.map(skill => (
                    <Skill skill={skill} key={skill.text} />
                ))}
            </Row>
        </Container>
    );
};

export default SkillsList;