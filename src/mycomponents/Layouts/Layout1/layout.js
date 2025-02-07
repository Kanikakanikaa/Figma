import React from 'react'
import "./layout.scss"
import { Container, Row } from 'react-bootstrap'

export default function Layout() {
  return (
    
    <div className='containerR'>
        <Container>
            <Row className='heading'>
        <h3>
        Schools that Link Expertise<br/> with Worldwide Pedagogy
        </h3>
        <p>
        With world-class methodologies, ASB aligns contemporary competencies<br/> with industry requirements, preparing students to succeed in an<br/> interconnected, global workforce.
        </p>
        </Row>
        </Container>
    </div>
  )
}
