import React from 'react'
import Project from '@components/Project'
import { Accordion, Container, Row } from 'react-bootstrap'
import useJsonData from '@hooks/useJsonData'

const ProjectList = () => {
  const { data: projectList, loading, error } = useJsonData('json/projects.json')

  const renderContent = () => {
    if (loading) {
      return <p>Loading projects...</p>
    }

    if (error) {
      return <p>Failed to load projects: {error}</p>
    }

    return (
      <Accordion>
        {projectList.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </Accordion>
    )
  }

  return (
    <Container as="article" id="projects">
      <Row>
        <div className="page-header">
          <h1>Jobs & Projects</h1>
        </div>
      </Row>
      <Row>
        {renderContent()}
      </Row>
    </Container>
  )
}

export default ProjectList
