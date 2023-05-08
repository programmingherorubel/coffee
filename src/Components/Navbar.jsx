import React from 'react';
import './Style/navbar.css'
import logo from './../images/logo.png'
import { Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Container>
                <div className='text-center mb-2 mx-auto'>
                    <img src={logo} style={{width:"250px"}} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;