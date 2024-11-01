import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import SocialMediaIcons from './SocialMediaIcons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', contactNumber: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="contact-container">
    <h1>Contact Us</h1>
    <p>If you have any questions or need further assistance, please don’t hesitate to reach out to the Connecting Dot team. You can get in touch with us using the form below or via the contact details provided.</p>

    <div className="contact-info">
      <h2>Our Contact Details</h2>
      <p><strong>Address:</strong> 123,mussafah ,Abudhabi,UAE</p>
      <p><strong>Phone:</strong> +1 (234) 547-1901</p>
      <WhatsAppButton/>
      <p><strong>Email:</strong> support@example.com</p>
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Contact Number:</label>
        <input 
          type="tel" 
          name="contactNumber" 
          value={formData.contactNumber} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" style={{backgroundColor:"darkblue"}}>Submit</button>
    
      
    </form>
    <SocialMediaIcons/>
    </div>
  );
};

export default ContactForm;