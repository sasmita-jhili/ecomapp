import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container className="p-0" >
                <Row>
                    <Col className="text-center" >
                        <h4>Contact us</h4>
                        <ul className='list-unstyled'>
                            <li>contact</li>
                            <li>contact</li>
                            <li>contact</li>
                            <li>contact</li>
                        </ul>
                    </Col>
                    <Col className="text-center" >
                        <h4>About us</h4>
                        <ul className='list-unstyled'>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </Col>
                    <Col className="text-center" >
                        <h4>Contact us</h4>
                        <ul className='list-unstyled'>
                            <li>contact</li>
                            <li>contact</li>
                            <li>contact</li>
                            <li>contact</li>
                        </ul>
                    </Col>
                    <Col className="text-center" >
                        <h4>Follow Us</h4>
                        <ul className='list-unstyled'>
                            <li>Facebook</li>
                            <li>Email</li>
                            <li>Twitter</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center" > Copyright &copy; 2022</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer