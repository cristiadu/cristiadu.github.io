import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';

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
        <article id="projects" className="container">
            <div className="row">
                <div className="page-header">
                    <h1>Jobs & Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {projectList.map(project => (
                        <Project project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ProjectList;