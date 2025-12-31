import React from 'react'

const ContactBar = () => {
  return (
    <div className="contact-bar" id="contact">
      <div className="contact-bar-item">
        <h3 className="contact-bar-title">Location</h3>
        <div className="contact-bar-content">
          Victoria, British Columbia, Canada 🇨🇦
        </div>
      </div>
      
      <div className="contact-bar-item">
        <h3 className="contact-bar-title">Email</h3>
        <div className="contact-bar-content">
          <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a>
        </div>
      </div>

      <div className="contact-bar-item">
        <h3 className="contact-bar-title">Phone</h3>
        <div className="contact-bar-content">
          +1 (250) 516-6800
        </div>
      </div>

      <div className="contact-bar-item">
        <h3 className="contact-bar-title">Connect</h3>
        <div className="social-links">
          <a href="https://www.facebook.com/cristiano.faustino" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src="images/icons/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="images/icons/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/cristiadu" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="images/icons/github-icon.png" alt="GitHub" />
          </a>
          <a href="http://www.last.fm/user/cristiadu" target="_blank" rel="noopener noreferrer" title="Last.fm">
            <img src="images/icons/lastfm-icon.png" alt="Last.fm" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactBar
