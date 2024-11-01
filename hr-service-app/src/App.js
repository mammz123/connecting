import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Career from './Components/Career';
import Footer from './Components/Footer';

import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './Components/Navbar';
import ClientShowcase from './Components/ClientShowcase';

import User from './Components/User';

import ContactForm from './Components/ContactForm';
import Staff from './Components/Staff';
import DesignServices from './Components/career/DesignServices';
import DigitalMarketingServices from './Components/career/DigitalMarketingServices';
import WebDevelopmentServices from './Components/career/WebDevelopmentServices';
import LogoDesignServices from './Components/career/LogoDesignServices';
import Consultation from './Components/career/Consultation';
import Branding from './Components/career/Branding';



const App = () => {

  
  return (
    
    
    <>
      
      <Router>
      <div></div>
       <Navbar/>
       
       
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/job" component={Career} />
        
        <Route path="/client" component={ClientShowcase} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/122" component={User} />
        <Route path="/staff" component={Staff} />

        <Route path="/category2" component={DigitalMarketingServices} />
        <Route path="/ca" component={DesignServices} />
        <Route path="/category3" component={WebDevelopmentServices} />
        <Route path="/category4" component={LogoDesignServices} />
        <Route path="/category5" component={Consultation} />
        <Route path="/category6" component={Branding} />
        
       
      </Switch>
      <Footer/>
     
    </Router>
    

   
   
      
      
    </>

   
    
  );
};

export default App;
