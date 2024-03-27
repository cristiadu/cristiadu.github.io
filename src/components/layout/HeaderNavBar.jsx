import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const HeaderNavBar = () => {
    return (
        <header>
            <Navbar fixed="top" expand="lg" collapseOnSelect as="nav">
                <Container fluid>
                    <Navbar.Brand href="index.html">Cristiano Faustino</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="https://drive.google.com/file/d/1cD4wZK0Z4qqOXOH_8XwoIVWl1uVh9lZ-/view?usp=sharing" target="_blank">Resume</Nav.Link>
                            <Nav.Link as={Link} to="projects" spy={true} smooth={true} offset={-100} duration={900}>Projects</Nav.Link>
                            <Nav.Link as={Link} to="skills" spy={true} smooth={true} offset={-100} duration={900}>Skills</Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/cristianofaustino/" target="_blank">LinkedIn</Nav.Link>
                            <Nav.Link as={Link} to="contact" spy={true} smooth={true} offset={-100} duration={900}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default HeaderNavBar;
