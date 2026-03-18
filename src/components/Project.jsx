import { useState } from 'react'
import PropTypes from 'prop-types'

const ELEMENT_NODE = 1
const TEXT_NODE = 3

const renderDescriptionNode = (node, key) => {
  if (node.nodeType === TEXT_NODE) {
    return node.textContent
  }

  if (node.nodeType !== ELEMENT_NODE) {
    return null
  }

  const children = Array.from(node.childNodes).map((child, index) => (
    renderDescriptionNode(child, `${key}-${index}`)
  ))

  switch (node.tagName.toLowerCase()) {
    case 'a':
      return (
        <a key={key} href={node.getAttribute('href') ?? '#'}>
          {children}
        </a>
      )
    case 'br':
      return <br key={key} />
    case 'em':
      return <em key={key}>{children}</em>
    case 'li':
      return <li key={key}>{children}</li>
    case 'ol':
      return <ol key={key}>{children}</ol>
    case 'p':
      return <p key={key}>{children}</p>
    case 'span':
      return <span key={key}>{children}</span>
    case 'strong':
      return <strong key={key}>{children}</strong>
    case 'ul':
      return <ul key={key}>{children}</ul>
    default:
      return children
  }
}

const renderDescription = (descriptionHTML) => {
  const parser = new DOMParser()
  const document = parser.parseFromString(descriptionHTML, 'text/html')

  return Array.from(document.body.childNodes).map((node, index) => (
    renderDescriptionNode(node, `description-${index}`)
  ))
}

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
            {renderDescription(project.descriptionHTML)}
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
