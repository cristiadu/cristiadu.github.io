import React from 'react'
import PropTypes from 'prop-types'

const Skill = ({ skill }) => {
  return (
    <div className="classified-item">
      <img 
        src={'images/' + skill.image} 
        alt={skill.text}
        className="classified-image"
      />
      <p className="classified-text">{skill.text}</p>
      {skill.years && (
        <p className="classified-years">{skill.years} {skill.years === 1 ? 'year' : 'years'}</p>
      )}
    </div>
  )
}

Skill.propTypes = {
  skill: PropTypes.shape({
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    years: PropTypes.number
  }).isRequired
}

export default Skill
