import React from 'react';
import './Style/banner.css'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                    <h2 style={{color:'white'}} className='text-4xl font'>Would you like a Cup of Delicious Coffee?</h2>
                            <p style={{color:'gray'}}>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                            <button className='custombutton'>Larn More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;