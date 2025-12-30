import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
    
  return (
    <footer>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md="auto" xs={12} className="text-center">
            Cristiano Faustino&apos;s Portfolio © {currentYear}. All rights reserved.
          </Col>
          <Col md="auto" xs={12} className="text-center">
            Email: <a href="mailto:cristiadu@gmail.com">cristiadu@gmail.com</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
