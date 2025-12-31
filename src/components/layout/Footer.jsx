import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
    
  return (
    <footer className="newspaper-footer">
      <div className="footer-content">
        <span>
          Cristiano Faustino © {currentYear}. All rights reserved.
        </span>
        <span>
          Email: <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
