import React from 'react'
import '../Footer.css';

function Footer() {
  return (
    
      <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>Connecting Dots Advertising Agency</h3>
          <p>
          specializes in crafting tailored marketing strategies that bridge the gap between brands and their audiences, fostering meaningful connections and driving growth.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about">About Us</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="job">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://twitter.com" className="social-icon">Twitter</a>
            <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
            <a href="https://instagram.com" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Connecting Dots Advertising Agency. All Rights Reserved.</p>
      </div>
    </footer>
    
  )
}

export default Footer

