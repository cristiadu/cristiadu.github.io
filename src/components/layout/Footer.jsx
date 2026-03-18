const currentYear = new Date().getFullYear()

const Footer = () => {
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
