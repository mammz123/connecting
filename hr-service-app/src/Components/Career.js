// src/components/CareerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import log from '../vedio/dots.jpeg'


const Career = () => {
  const styles = {
    header: {
      backgroundColor: '#f4f4f4',
      padding: '20px',
      textAlign: 'center',
    },
    section: {
      margin: '20px 0',
      padding: '0 20px',
    }
  };
  const steps = [
    { number: 1, title: 'Speak to Us', description: 'Our team will discuss the details of your requirements with you' },
    { number: 2, title: 'We Will Source', description: 'Using our extensive database we will source suitable workforce for your project' },
    { number: 3, title: 'Analyse', description: 'Our management team will meet face to face with the team to discuss skillset & experience' },
    { number: 4, title: 'Introductions', description: 'We will arrive on site to introduce our operatives to you on the 1st day' },
    { number: 5, title: 'Support', description: 'Throughout the project we will offer you our continued support and meet to discuss any further requirements' },
  ];
  return (
    <div>
      <div className="career-container">
        <div>
          <header style={styles.header}>
            <h1>Welcome to Our Portfolio Page</h1>
            <p>At Connecting Dot, we are dedicated to fostering a culture where every team member is valued and empowered to grow. Join us on our journey of creativity, innovation, and excellence in the world of advertising.</p>
            <img src={log} height={50} width={50}></img>
          </header>


        </div>
        <h1 className="career-title">Explore Portfolio</h1>
        <div className="career-grid">
          <Link to="/ca">
            <div className="category">
              <img src="https://www.appypie.com/blog/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-22-12.51.52-A-visually-striking-and-modern-feature-image-representing-graphic-design-websites.-The-image-should-showcase-elements-like-sleek-website-layouts-colo.png" alt="Category 1" />
              <h2>Designing</h2>
            </div>
          </Link>
          <Link to="/category2">
            <div className="category">
              <img src="https://www.shutterstock.com/image-photo/digital-online-marketing-businessman-using-600nw-1792952278.jpg" alt="Category 2" />
              <h2>Digital Marketing</h2>
            </div>
          </Link>
          <Link to="/category3">
            <div className="category">
              <img src="https://t3.ftcdn.net/jpg/07/52/08/12/360_F_752081227_nruXgif94zBL0Q4nYKNbrp0wQGvx6d6r.jpg" alt="Category 3" />
              <h2>Web Development</h2>
            </div>
          </Link>
          <Link to="/category4">
            <div className="category">
              <img src="https://media.istockphoto.com/id/1254189290/vector/abstract-o-initial-logo-designs-concept-vector-colorful-letter-o-logo-designs.jpg?s=612x612&w=0&k=20&c=-P3JjGIauWU0XlUHwt44QQN9DWJOLwufTyqOC2pQpYw=" alt="Category 4" />
              <h2>Logo Designing</h2>
            </div>
          </Link>
          <Link to="/category5">
            <div className="category">
              <img src="https://t4.ftcdn.net/jpg/05/37/97/69/240_F_537976918_zcM7KWuQtMPMFlkHbpbRcIaA6m0AAmB5.jpg" alt="Category 5" />
              <h2>Consultation</h2>
            </div>
          </Link>
          <Link to="/category6">
            <div className="category">
              <img src="https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1704441483/ideas-and-advice-prod/en-us/Logo-vs-branding/Logo-vs-branding.jpeg?_i=AA" alt="Category 6" />
              <h2>Branding</h2>
            </div>
          </Link>
        </div>
        <h1 className="career-title">Our Portfolio</h1>

        <div className="career-grid">
          <div className="category">
            <img src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/58_Top-10-Successful-Graphic-Design-Course-Creators.jpg" alt="Category 1" />
          </div>
          <div className="category">
            <img src="https://cdn.colorexpertsbd.com/wp-content/uploads/2023/12/Art-and-Illustration-for-Graphic-Design-Example-3.webp" alt="Category 2" />
          </div>
          <div className="category">
            <img src="https://media.licdn.com/dms/image/v2/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=rLMZ59ByIABpdPtfPZPZC65iXWG4zbht2eqKfWOdxRs" alt="Category 3" />
          </div>

          <div className="category">
            <img src="https://www.unite.ai/wp-content/uploads/2023/05/AI-Graphic-design-tools.png" alt="Category 4" />
          </div>

          <div className="category">
            <img src="https://sunshinedesign.com.au/wp-content/uploads/2023/02/stufly_graphic_design_colourful_birds_exploding_out_powder_99bdc5ea-e29b-4c0a-986e-e9f557fdc032-1024x675.png" alt="Category 5" />
          </div>

          <div className="category">
            <img src="https://media.licdn.com/dms/image/D4D12AQE9Ej3zzHizng/article-cover_image-shrink_720_1280/0/1682430843912?e=2147483647&v=beta&t=MssPXwxyN6kJ-asWA-V4V6By7livzUR9O4X4yiQqIRA" alt="Category 6" />
          </div>
        </div>
        <section style={styles.section}>
          <h2>Why Work With Us?</h2>
          <p>Connecting Dot Advertising Agency is dedicated to fostering an inclusive environment that champions diversity, innovation, and growth. We provide competitive benefits, extensive training programs, and numerous opportunities for career advancement.</p>
        </section>
        <section style={styles.section}>

        <p>Over the past several years, the UAE has seen remarkable growth across various industries. While traditionally focused on oil and petroleum, the UAE has evolved into a dynamic economy fostering opportunities across diverse sectors. The advertising and marketing industry, in particular, is experiencing a surge in demand for innovative strategies and skilled professionals. At Connecting Dot Advertising Agency, we provide a comprehensive range of advertising and consulting services, tailored to support both short-term campaigns and long-term branding goals, ensuring that our clients reach their audience effectively and impactfully.</p>        </section>

      </div>
      <section className="unique-career-section">
        <h2 className="unique-career-heading">WHERE CAN WE HELP YOU</h2>
        <h1 className="unique-career-title">Why should you choose us?</h1>

        <div className="unique-career-content">
          <div className="unique-career-card">
            <div className="unique-career-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaFebADwCaTpDDTx3sHOlbYv6OzJDh2WQzg&s" alt="Icon 1" />
            </div>
            <p>We guide you through the planning and setup phase. We make the process as simple as possible for you and maximize the effectiveness of your strategy.</p>
          </div>

          <div className="unique-career-card">
            <div className="unique-career-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxmh2S7ABbEtStT2cKKKKarm0xSBrQYKbgbWUXkpdOxP9glXyAeIC-ZNzqunSoxxZOx4&usqp=CAU" alt="Icon 2" />
            </div>
            <p>We guide you throughout the planning and setup phase, making the process as simple as possible for you, while maximizing the effectiveness of the strategy behind it.</p>
          </div>

          <div className="unique-career-card">
            <div className="unique-career-icon">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/12/startup.jpg" alt="Icon 3" />
            </div>
            <p>We provide industry and role-specific research and engagement strategies to help you benefit from our technology and therefore, increasing your market visibility and brand value.</p>
          </div>

          <div className="unique-career-card">
            <div className="unique-career-icon">
              <img src="https://images.startups.co.uk/wp-content/uploads/2018/09/13123405/what-is-a-startup-business-1.jpg" alt="Icon 4" />
            </div>
            <p>We help leverage your USP – Unique Selling Point, to give you a competitive advantage.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;