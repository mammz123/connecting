import React, { useState } from 'react';


import Services from './Services';

import Career from './Career';
import About from './About';

import ContactSection from './ContactSection';

import ContactForm from './ContactForm';
import ClientShowcase from './ClientShowcase';
import HomeCarousel from './HomeCarousel';
import WhatWeOffer from './WhatWeOffer';
import SocialMediaIcons from './SocialMediaIcons';
import Testimonials from './Testimonials';
import Staff from './Staff';

const Home = () => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
    
        
        
    <HomeCarousel/>  
    <Services/>
    
    <Career/>
    <About/>
    <Staff/>
    <WhatWeOffer/>
  
    <ClientShowcase/>
    <ContactForm/>
    
    <ContactSection/>
    
    
    </div>
    
    
  );
}



export default Home;