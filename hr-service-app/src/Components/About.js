import React from 'react';
import Certifications from './Certifications';




const About = () => {
  const styles = {
    section: {
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#002f6c', // dark blue color
    },
    subtitle: {
      fontSize: '18px',
      color: '#a0a0a0', // lighter color for the subtitle
      marginBottom: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    card: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left',
      fontSize: '16px',
    },
    quoteButton: {
      backgroundColor: '#00a0df',
      color: '#fff',
      padding: '12px 25px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '15px',
    },
    contact: {
      marginTop: '15px',
      fontSize: '18px',
      color: '#002f6c',
    },
    phone: {
      color: '#002f6c',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    mapContainer: {
      flex: 1,
      textAlign: 'right',
      minWidth: '300px',
    },
    mapImage: {
      maxWidth: '100%',
      height: 'auto',
    },
  };
  return (
    <div className="">
      <div className="container1">
        <div className="image-section">
          {/* Insert your image source below */}
          <img src="https://images.squarespace-cdn.com/content/v1/64cac6e7f41ccf1650ccc43b/1691537255531-J7BYDU9TJG1C1X1JPDQ9/Dubai-Skyline.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className="text-section">
          <p>
            Welcome to Connecting Dots Agency  – Connecting Dots Agency is dedicated to uniting brands with their target audiences through innovative marketing solutions. With a focus on personalized strategies, we help businesses navigate the complex landscape of advertising and communication. Our team of experts leverages creativity and data-driven insights to craft compelling campaigns that resonate with consumers. By building strong relationships and fostering engagement, Connecting Dots Agency empowers brands to achieve their goals and stand out in a competitive market
          </p>



        </div>
      </div>


      <section className="info-section">
        <div className="info-text">
          <p>
            Connecting Dots Agency is a renowned service provider headquartered in Abudhabi, delivering exceptional staffing solutions across the UAE, including Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al-Quwain, and Dubai
          </p>
          <p>
            As a registered advertising agency in the UAE, Connecting Dots Agency adheres to the established standards and regulations set forth by the UAE Ministry of Human Resources & Emiratisation. Over the years, our dedicated approach has empowered numerous organizations to achieve their marketing goals and connect effectively with their target audiences across the UAE.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-item">
          <h2>1500+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stats-item">
          <h2>15+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stats-item">
          <h2>4+</h2>
          <p>Offices in UAE</p>
        </div>
        <div className="stats-item">
          <h2>7000+</h2>
          <p>Manpower</p>
        </div>


      </section>
      <section style={styles.section}>
        <h2 style={styles.title}>Our Promise To You</h2>
        <h4 style={styles.subtitle}>Bond of Trust</h4>
        <div style={styles.grid}>
          <div style={styles.card}>
            <strong>Quality Assurance:</strong> Deliver excellence in every project.
          </div>
          <div style={styles.card}>
            <strong>Timely Delivery:</strong> Your deadlines are our priority.
          </div>
          <div style={styles.card}>
            <strong>Transparent Communication:</strong>Open lines for every collaboration.
          </div>
          <div style={styles.card}>
            <strong>Innovative Solutions:</strong> Creativity that drives results.
          </div>
          <div style={styles.card}>
            <strong>Expert Team: </strong>Experienced professionals at your service.
          </div>
          <div style={styles.card}>
            <strong> Integrity and Trust:</strong> Building lasting partnerships.
          </div>
          <div style={styles.card}>
            <strong>Tailored Strategies:</strong>  Customized solutions for unique needs.
          </div>
          <div style={styles.card}>
            <strong>Measurable Results:</strong>  Data-driven strategies for success.
          </div>
        </div>
      </section>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.textContainer}>
            <p style={styles.text}>
              With a large <strong>pool of highly skilled workforce</strong>, we assure to meet all manpower requirements in the
              <strong> shortest mobilization time</strong>, <strong>anywhere in the UAE</strong>.
            </p>
            <div style={styles.actions}>
              <button style={styles.quoteButton}>REQUEST A QUOTE</button>
              <p style={styles.contact}>
                Or Call <a href="tel:+971 9894 67 2111" style={styles.phone}>+971 9894 67 2111</a>
              </p>
            </div>
          </div>
          <div style={styles.mapContainer}>
            <img
              src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/15683.png"
              alt="UAE Map"
              style={styles.mapImage}
            />
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>"At Connecting Dots Agency, our vision is to be the catalyst for transformative marketing solutions that empower brands to forge authentic connections with their audiences. We aspire to lead the marketing landscape with innovative strategies that drive engagement and foster loyalty.”</p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>“Our mission is to deliver innovative, data-driven strategies that ensure our clients stand out in a competitive environment. Through creativity, collaboration, and a deep understanding of market dynamics, we aim to create impactful campaigns that resonate and inspire, ultimately leading to shared success for both our clients and the communities we serve.”</p>
          </div>
        </div>
      </section>



      <div className="container1">
        <div className="image-section">
          {/* Insert your image source below */}
          <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="Profile" className="profile-img" />
        </div>
        <div className="text-section">
          <p>
            As an advertising agency, we strive to meet the evolving needs of our clients, and all our services are <span className="highlight">customized</span> to align with their unique goals and visions.
          </p>

          <div className="person-info">
            <p><strong>Sunad</strong></p>
            <p>Chairman, Connecting Dots</p>
          </div>


        </div>
      </div>

      <Certifications />
    </div>

  );
};

export default About;