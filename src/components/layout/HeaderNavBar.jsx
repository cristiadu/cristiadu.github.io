import React from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-scroll'

const HeaderNavBar = () => {
  return (
    <header>
      <Navbar fixed="top" expand="lg" collapseOnSelect as="nav" id="menu" key="menu">
        <Container fluid>
          <Navbar.Brand href="index.html"><h1>Cristiano Faustino</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="https://drive.google.com/file/d/1cD4wZK0Z4qqOXOH_8XwoIVWl1uVh9lZ-/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-user"></i> Resume</NavLink>
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-cogs"></i> Projects</Link>
              <Link to="skills" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-chess-rook"></i> Skills</Link>
              <NavLink href="https://www.linkedin.com/in/cristianofaustino/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</NavLink>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-commenting-o"></i> Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default HeaderNavBar
