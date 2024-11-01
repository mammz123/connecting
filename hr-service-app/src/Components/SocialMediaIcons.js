import React from 'react';
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import '../SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      {/* LinkedIn icon */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon linkedin" />
      </a>

      {/* Phone call icon */}
      <a href="tel:+123456789">
        <FaPhoneAlt className="icon phone" />
      </a>

      {/* Email icon */}
      <a href="mailto:example@email.com">
        <FaEnvelope className="icon email" />
      </a>

      {/* WhatsApp icon */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon whatsapp" />
      </a>

      {/* Telegram icon */}
      <a href="https://t.me/YourTelegramUsername" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane className="icon telegram" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;