import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Project = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(project.activeItem === 'in')

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleExpanded()
    }
  }

  return (
    <article className="archive-article">
      <div 
        className="archive-header" 
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
      >
        <span className={`archive-toggle ${isExpanded ? 'expanded' : ''}`}>
          ▸
        </span>
        <div className="archive-header-content">
          <h3 className="archive-headline">{project.name}</h3>
          <div className="archive-meta">
            <span>{project.startDate} – {project.endDate}</span>
            <span>{project.company}</span>
            <span>{project.type}</span>
          </div>
        </div>
      </div>
      
      <div className={`archive-body ${isExpanded ? 'expanded' : ''}`}>
        <div className="archive-body-inner">
          <img 
            src={'images/' + project.imagePrincipal} 
            alt={project.company}
            className="archive-image"
          />
          <div className="archive-description">
            <div dangerouslySetInnerHTML={{ __html: project.descriptionHTML }} />
          </div>
        </div>
      </div>
    </article>
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
