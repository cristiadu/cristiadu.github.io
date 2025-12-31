import React from 'react'
import useJsonData from '@/hooks/useJsonData'
import Education from '@/components/Education'

const EducationList = () => {
  const { data: educationList, loading, error } = useJsonData('json/education.json')

  if (loading) {
    return <span className="education-loading">Loading...</span>
  }

  if (error) {
    return <span className="education-error">Failed to load</span>
  }

  return (
    <div className="sidebar-section">
      <h3 className="sidebar-title">Education</h3>
      <div className="sidebar-content">
        {educationList.map((edu, index) => (
          <Education key={index} education={edu} />
        ))}
      </div>
    </div>
  )
}

export default EducationList
