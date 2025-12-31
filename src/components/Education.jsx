import React from 'react'
import PropTypes from 'prop-types'

const Education = ({ education }) => {
  return (
    <div className="education-item">
      <strong>{education.field}</strong><br />
      <em>{education.institutionShort} <span className="degree-type">({education.degreeType})</span></em><br />
      <span className="education-meta">
        {education.location} · {education.yearFrom} – {education.yearTo}
      </span>
    </div>
  )
}

Education.propTypes = {
  education: PropTypes.shape({
    degreeType: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    institutionShort: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    yearFrom: PropTypes.number.isRequired,
    yearTo: PropTypes.number.isRequired
  }).isRequired
}

export default Education
