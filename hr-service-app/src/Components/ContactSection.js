import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactSection.css';
import MapComponent from './MapComponent';
import ContactForm from './ContactForm';
import WhatsAppButton from './WhatsAppButton';

function ContactSection() {
    return (
        <div>
        <div className="contact-section">
            <div className="contact-info">
                <h3>Contact Us</h3>
                <div className="contact-item">
                  
                </div>
                <div className="contact-item">
                    <FaPhoneAlt /> UAE: +971 501961652
                    
                    
                </div>
                <div className="contact-item">
                    <FaEnvelope /> Global E-mail
                </div>
                <div className="social-icons">
                    <FaLinkedin />
                    <FaTwitter />
                    <FaYoutube />
                    <FaInstagram />
                </div>
                <div className="address">
                    <FaMapMarkerAlt /> AL Rigga Diera, Dubai, UAE
                </div>
                <button className="contact-button">More contact options →</button>
            </div>
            <MapComponent/>

           

            
          
        </div>
       
        
        </div>
    );
}

export default ContactSection;