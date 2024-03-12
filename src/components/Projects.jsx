import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create component that renders all projects from the json file
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get('json/projects.json')
            .then(response => {
                setProjects(response.data);
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
                    {projects.map((project, index) => (
                        <div className="panel panel-default" key={index}>
                            <div className="panel-heading" role="tab" id={project.id + 'heading'}>
                                <h4 className="panel-title">
                                    <i className="fa fa-plus"></i>&nbsp;
                                    <a className="link-project" role="button" data-toggle="collapse" href={'#' + project.id}
                                        aria-expanded="true" aria-controls="collapseOne">
                                        {project.name}
                                    </a>
                                </h4>
                            </div>
                            <div id={project.id} className={'panel-collapse collapse ' + project.activeItem} role="tabpanel"
                                aria-labelledby={project.id + 'heading'}>
                                <div className="panel-body">
                                    <div className="col-xs-12 col-md-8 col-sm-8">
                                        <strong>Company:</strong> {project.company}
                                    </div>
                                    <div className="col-xs-12 col-md-4 col-sm-4">
                                        <span className="pull-right-sm-md"><strong>Type:</strong> {project.type}</span>
                                    </div>
                                    <div className="col-xs-12 col-md-3 col-sm-4">
                                        <strong>Started:</strong> {project.startDate}
                                    </div>
                                    <div className="col-xs-12 col-md-3 col-sm-4">
                                        <strong>Ended:</strong> {project.endDate}
                                    </div>
                                    <div className="col-md-6 col-md-offset-3 col-sm-7 col-sm-offset-2 col-xs-12 vspacing-project-img">
                                        <img src={"images/" + project.imagePrincipal} className="img-responsive center-block" />
                                    </div>
                                    <div className="col-xs-12 col-md-12">
                                        <div className="justifyParagraph" dangerouslySetInnerHTML={{ __html: project.descriptionHTML }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Projects;