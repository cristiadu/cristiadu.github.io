import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create component that renders all skills from the json file
const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios.get('json/skills.json')
            .then(response => {
                setSkills(response.data);
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
                {skills.map((skill, index) => (
                    <div className="col-md-3 col-xs-6" key={index}>
                        <span className="thumbnail">
                            <img className="img-responsive" src={'images/' + skill.image} alt={skill.text} />
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default Skills;