import React from 'react';

// Create component that renders all projects from the json file
const Skills = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get('json/projects.json')
            .then(response => {
                setSkills(response.data);
            });
    }, []);

    const renderHtml = (html_code) => {
        return <Parser>{renderToStaticMarkup(html_code)}</Parser>;
    };

    return (
        <article id="projects" class="container">
            <div class="row">
                <div class="page-header">
                    <h1>Jobs & Projects</h1>
                </div>
            </div>
            <div class="row">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {projects.map((project, index) => (
                        <div class="panel panel-default" key={index}>
                            <div class="panel-heading" role="tab" id={project.id + 'heading'} key={project.id + 'heading'}>
                                <h4 class="panel-title">
                                    <i class="fa fa-plus"></i>
                                    <a class="link-project" role="button" data-toggle="collapse" href={'#' + project.id}
                                        aria-expanded="true" aria-controls="collapseOne">
                                        {project.name}
                                    </a>
                                </h4>
                            </div>
                            <div key={project.id} className={'panel-collapse collapse' + project.activeItem} role="tabpanel"
                                aria-labelledby={project.id + 'heading'}>
                                <div class="panel-body">
                                    <div class="col-xs-12 col-md-8 col-sm-8">
                                        <strong>Company:</strong> {project.company}
                                    </div>
                                    <div class="col-xs-12 col-md-4 col-sm-4">
                                        <span class="pull-right-sm-md"><strong>Type:</strong> {project.type}</span>
                                    </div>
                                    <div class="col-xs-12 col-md-3 col-sm-4">
                                        <strong>Started:</strong> {project.startDate}
                                    </div>
                                    <div class="col-xs-12 col-md-3 col-sm-4">
                                        <strong>Ended:</strong> {project.endDate}
                                    </div>
                                    <div class="col-md-6 col-md-offset-3 col-sm-7 col-sm-offset-2 col-xs-12 vspacing-project-img">
                                        <img src={"images/" + project.imagePrincipal} class="img-responsive center-block" />
                                    </div>
                                    <div class="col-xs-12 col-md-12">
                                        <div class="justifyParagraph">
                                            {renderHtml(project.description)}
                                        </div>
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

export default Skills;