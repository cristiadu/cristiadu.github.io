import React from 'react'
import Contact from '@/components/Contact'
import ProjectList from '@/components/ProjectList'
import SkillsList from '@/components/SkillsList'

const MainContent = () => {
  return (
    <main className="newspaper-content">
      <Contact />
      <ProjectList />
      <SkillsList />
    </main>
  )
}

export default MainContent
