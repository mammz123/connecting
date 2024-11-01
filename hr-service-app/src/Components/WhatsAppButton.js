// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = '9895735589'; // Replace with your phone number in international format without the '+' sign

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      style={{
        backgroundColor: 'green',
        color: 'white',
      
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >Whatsapp
      <FaWhatsapp />
      
      
    </button>
  );
};

export default WhatsAppButton;
