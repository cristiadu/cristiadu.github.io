import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
    
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            <Row>
              <Col md={7} xs={12}>Cristiano Faustino&apos;s Portfolio © {currentYear}. All rights reserved.</Col>
              <Col md={4} xs={12}>Email: <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
