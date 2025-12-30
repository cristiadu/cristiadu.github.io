import React from 'react'
import Skill from '@/components/Skill'
import useJsonData from '@/hooks/useJsonData'

const SkillsList = () => {
  const { data: skillsList, loading, error } = useJsonData('json/skills.json')

  const renderContent = () => {
    if (loading) {
      return <p className="loading-message">Loading skills...</p>
    }

    if (error) {
      return <p className="error-message">Failed to load skills: {error}</p>
    }

    return (
      <div className="classifieds-grid">
        {skillsList.map(skill => (
          <Skill skill={skill} key={skill.text} />
        ))}
      </div>
    )
  }

  return (
    <section className="classifieds-section" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
      </div>
      {renderContent()}
    </section>
  )
}

export default SkillsList
