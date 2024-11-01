import React, { useState } from 'react';
import '../Navbar.css';
import WhatsAppButton from './WhatsAppButton';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import img from '../images/dots.jpeg'
import { FiAlignJustify } from 'react-icons/fi';



const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={img} height={140} width={180} style={{marginLeft:"30px",marginTop:"10px"}}></img>
                
               
            </div>
            <ul className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/job">PORTFOLIO</a></li>
                <li><a href="/client">OUR CLIENT</a></li>
                <li><a href="/contact">CONTACT</a></li>
              

                
                
            </ul>
            <div className="mobile-menu-icon" onClick={handleMenuToggle}>
                <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}> 
          
                <Dropdown as={ButtonGroup}>
                <FiAlignJustify />
      

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
      <Dropdown.Item href="/">home</Dropdown.Item>
        <Dropdown.Item href="/services">Services</Dropdown.Item>
        <Dropdown.Item href="/about">About us</Dropdown.Item>
        <Dropdown.Item href="/job">PORTFOLIO</Dropdown.Item>
        <Dropdown.Item href="/client">our client</Dropdown.Item>
        <Dropdown.Item href="/contact">contact us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       
                </i>
            </div>
        </nav>
    );
}

export default Navbar;