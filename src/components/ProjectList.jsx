import React from 'react'
import Project from '@/components/Project'
import useJsonData from '@/hooks/useJsonData'

const ProjectList = () => {
  const { data: projectList, loading, error } = useJsonData('json/projects.json')

  const renderContent = () => {
    if (loading) {
      return <p className="loading-message">Loading career history...</p>
    }

    if (error) {
      return <p className="error-message">Failed to load career history: {error}</p>
    }

    return projectList.map(project => (
      <Project project={project} key={project.id} />
    ))
  }

  return (
    <section className="career-list" id="career">
      <div className="section-header">
        <h2>Career</h2>
      </div>
      <p className="section-subhead">Click any headline to read the full story</p>
      
      <div className="career-list">
        {renderContent()}
      </div>
    </section>
  )
}

export default ProjectList
