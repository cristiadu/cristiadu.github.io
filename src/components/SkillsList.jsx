import React from 'react'
import Skill from '@/components/Skill'
import { Container, Row } from 'react-bootstrap'
import useJsonData from '@/hooks/useJsonData'

const SkillsList = () => {
  const { data: skillsList, loading, error } = useJsonData('json/skills.json')

  const renderContent = () => {
    if (loading) {
      return <p>Loading skills...</p>
    }

    if (error) {
      return <p>Failed to load skills: {error}</p>
    }

    return skillsList.map(skill => (
      <Skill skill={skill} key={skill.text} />
    ))
  }

  return (
    <Container as="article" id="skills">
      <Row>
        <div className="page-header">
          <h1>Main Skills</h1>
        </div>
      </Row>
      <Row>
        {renderContent()}
      </Row>
    </Container>
  )
}

export default SkillsList
