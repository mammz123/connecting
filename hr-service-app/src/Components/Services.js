import React from 'react';
import logose from '../images/business-recruitment-application.jpg'
import BackButton from './BackButton';
import SocialMediaIcons from './SocialMediaIcons';



const Services = () => {
  return (
    <div className="services">
      <h2 className="title">Our <span className="highlight"> Services</span></h2>
      <p className="description">
      Welcome to Connecting Dots advertising agency, Our agency offers comprehensive services to elevate your brand, from creative design and digital marketing to strategic media planning and content creation. We develop targeted brand strategies and manage public relations and influencer partnerships to amplify your reach. With a focus on data-driven results, our team tracks and refines every campaign, ensuring your message resonates and delivers measurable impact across all channels
      </p>



      <div className="services-grid">
        <div className="service-card">
          <img src="https://westent.com/wp-content/uploads/2020/12/Airlines-Creative_02-CreativeServices_AdobeStock_314829742-1400x815.jpeg" alt="Organization Design" />
          <h3>Creative Services</h3>
        </div>
        <div className="service-card">
          <img src="https://assets.entrepreneur.com/content/3x2/2000/20190820185239-GettyImages-985550942.jpeg" alt="HR Strategy & Transformation" />
          <h3>Digital Marketing</h3>
        </div>
        <div className="service-card">
          <img src="https://cdn.prod.website-files.com/643067b6b03b847eb9c418d0/64ef6b50ea7876649a7db2e2_648ca4297e54e6dcfd8ce92b_iStock-1311598658.jpeg" alt="HR Policies / Employee Relations" />
          <h3>Brand Strategy & Development</h3>
        </div>
        <div className="service-card">
          <img src="https://wittypen.com/blog/wp-content/uploads/2022/10/Content-marketing-tools-1.jpg" alt="Job Evaluation" />
          <h3>Content Marketing</h3>
        </div>
        <div className="service-card">
          <img src="https://appstronauts.co/wp-content/uploads/2021/04/workshops.jpg" alt="Job Evaluation" />
          <h3>Media Buying & Planning</h3>
        </div>
        <div className="service-card">
          <img src="https://media.licdn.com/dms/image/v2/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=rLMZ59ByIABpdPtfPZPZC65iXWG4zbht2eqKfWOdxRs" alt="Job Evaluation" />
          <h3>Graphic Design</h3>
        </div>
        <div className="service-card">
          <img src="https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg" alt="Job Evaluation" />
          <h3>Website Design & Development</h3>
        </div>
        <div className="service-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmta8dfRJRsEWGLINjiu1D4RefKUEUtwpGgw&s" alt="Job Evaluation" />
          <h3>Social Media Management</h3>
        </div>
        <div className="service-card">
          <img src="https://media.istockphoto.com/id/1357024062/photo/flat-lay-composition-with-camera-and-video-production-equipment-on-brown-wooden-background.jpg?s=612x612&w=0&k=20&c=m2VFSnTujnRln1aaBAu177lDKqLvDMaDE5sBjdwNFkw=" alt="Job Evaluation" />
          <h3>Video Production</h3>
        </div>
        <SocialMediaIcons/>
        
      </div>
     
    </div>
  );
};

export default Services;