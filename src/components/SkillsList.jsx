import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skill from './Skill';

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
        <article id="skills" className="container">
            <div className="row">
                <div className="page-header">
                    <h1>Main Skills</h1>
                </div>
            </div>
            <div className="row">
                {skillsList.map(skill => (
                    <Skill skill={skill} key={skill.text} />
                ))}
            </div>
        </article>
    );
};

export default SkillsList;