import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Contact = () => {
  return (
    <article className="about-me" id="contact">
      <Container>
        <Row className="content-about-me">
          <Col xs={12} sm={4} md={3}>
            <Image xs={12} sm={4} md={3} src="images/profile-pic.jpg" alt="My Photo" thumbnail />
          </Col>
          <Col xs={12} sm={5} md={6} className="content-about-me">
            <h3>About Me</h3>
            <p className="justifyParagraph">
                            I am a Senior Software Developer at Giftbit, a company that offers innovative solutions for digital gift cards and rewards.
                            With over 10 years of experience in software development, I have a strong foundation in full-stack web development, quality assurance, and software architecture.
                            At Giftbit, I provide software development expertise and architectural leadership for their new solutions and existing products.
                            I enjoy working with challenges using technology, particularly through lines of code and logical reasoning. I am always open to learning new technologies and embracing new challenges.
                            Some of the main technologies I have used in my career include Spring Boot, Java, Kubernetes, ReactJS, GoLang, and Kotlin.
            </p>
          </Col>
          <Col xs={12} sm={3} md={3}>
            <h3>Contact Information</h3>
            <Col xs={12} md={12}>
              <address>
                <strong>Cristiano de Oliveira Faustino</strong><br />
                <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a><br />
                                Phone: +1 (250) 516-6800
              </address>
            </Col>
            <Col xs={12} md={12}>
              <a href="https://www.facebook.com/cristiano.faustino" target="_blank" rel="noopener noreferrer"><Image className="img-icon-contacts"
                src="images/icons/facebook-icon.png" alt="Facebook" /></a>
              <a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank" rel="noopener noreferrer"><Image className="img-icon-contacts"
                src="images/icons/linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="https://github.com/cristiadu" target="_blank" rel="noopener noreferrer"><Image className="img-icon-contacts"
                src="images/icons/github-icon.png" alt="Github" /></a>
              <a href="http://www.last.fm/user/cristiadu" target="_blank" rel="noopener noreferrer"><Image className="img-icon-contacts"
                src="images/icons/lastfm-icon.png" alt="LastFM" /></a>
            </Col>
          </Col>
        </Row>
      </Container>
    </article>
  )
}

export default Contact
