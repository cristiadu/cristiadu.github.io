import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Image, Row, Col } from 'react-bootstrap';

const Project = ({ project }) => {
    const [isActive, setIsActive] = useState(project.activeItem === 'in' ? true : false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <Accordion.Item eventKey={project.id} active={isActive}>
            <Accordion.Header onClick={toggleActive}>
                <i className={`fa ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>&nbsp;
                {project.name}
            </Accordion.Header>
            <Accordion.Body>
                <Row>
                    <Col xs={12} md={8} sm={8}>
                        <strong>Company:</strong> {project.company}
                    </Col>
                    <Col xs={12} md={4} sm={4} className="text-md-end">
                        <strong>Type:</strong> {project.type}
                    </Col>
                    <Col xs={12} md={3} sm={4}>
                        <strong>Started:</strong> {project.startDate}
                    </Col>
                    <Col xs={12} md={3} sm={4}>
                        <strong>Ended:</strong> {project.endDate}
                    </Col>
                    <Col xs={12} md={{ span: 6, offset: 3 }} sm={{ span: 7, offset: 2 }} className="vspacing-project-img">
                        <Image src={"images/" + project.imagePrincipal} fluid />
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="justifyParagraph" dangerouslySetInnerHTML={{ __html: project.descriptionHTML }} />
                    </Col>
                </Row>
            </Accordion.Body>
        </Accordion.Item>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        imagePrincipal: PropTypes.string.isRequired,
        descriptionHTML: PropTypes.string.isRequired,
    }).isRequired,
};

export default Project;