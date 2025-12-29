import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Accordion, Image, Row, Col, Card } from 'react-bootstrap'

const Project = ({ project }) => {
  const [isActive, setIsActive] = useState(project.activeItem === 'in')

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <Card>
      <Accordion.Button as={Card.Header} key={project.id} onClick={toggleActive} >
        <i className={`fa ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>&nbsp;
        {project.name}
      </Accordion.Button>
      <Accordion.Collapse as={Card.Body} in={isActive} eventKey={project.id}>
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
            <Image src={'images/' + project.imagePrincipal} fluid />
          </Col>
          <Col xs={12} md={12}>
            <div className="justifyParagraph" dangerouslySetInnerHTML={{ __html: project.descriptionHTML }} />
          </Col>
        </Row>
      </Accordion.Collapse>
    </Card>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    imagePrincipal: PropTypes.string.isRequired,
    descriptionHTML: PropTypes.string.isRequired,
    activeItem: PropTypes.string
  }).isRequired
}

export default Project
