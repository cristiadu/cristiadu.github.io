import React from 'react'
import Contact from '@/components/Contact'
import ProjectList from '@/components/ProjectList'
import SkillsList from '@/components/SkillsList'
import Container from 'react-bootstrap/Container'

const MainContent = () => {
  return (
    <Container fluid as="section" className="content">
      <Contact />
      <ProjectList />
      <SkillsList />
    </Container>
  )
}

export default MainContent
