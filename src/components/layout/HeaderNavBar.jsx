import React from 'react'
import { Link } from 'react-scroll'

const HeaderNavBar = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="masthead-top">
          <span>Software Developer Since 2010</span>
          <span>{currentDate}</span>
        </div>
        
        <h1 className="masthead-title">Cristiano Faustino</h1>
        <p className="masthead-subtitle">Senior Software Developer</p>
        
        <nav className="masthead-nav">
          <Link to="about" spy={true} smooth={true} offset={-160} duration={900}>
            About
          </Link>
          <Link to="career" spy={true} smooth={true} offset={-160} duration={900}>
            Career
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-160} duration={900}>
            Skills
          </Link>
          <a href="https://drive.google.com/file/d/1cD4wZK0Z4qqOXOH_8XwoIVWl1uVh9lZ-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume ↗
          </a>
          <a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNavBar
