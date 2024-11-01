import React from 'react';
import BackButton from '../BackButton';

// ConsultationInfo Component for various types of consultations
const ConsultationInfo = ({ number, title, description, image }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>{number}. {title}</h2>
        <p>{description}</p>
      </div>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
    </div>
  );
};

// Consultation Component
const Consultation = () => {
  const consultations = [
    {
      title: 'Business Consultation',
      description: 'Providing expert advice to help businesses improve their performance, efficiency, and profitability. Our consultants conduct thorough assessments of your business operations and strategies, identifying areas for growth and optimization. We work closely with your team to develop tailored solutions that align with your business goals and industry standards, ensuring sustainable success.',
      image: 'https://t3.ftcdn.net/jpg/03/28/82/42/360_F_328824244_h8ln41Hd3sh985TASxWVMmZ2w5LYSYvz.jpg', // Replace with actual image URL
    },
    {
      title: 'Financial Consultation',
      description: 'Offering comprehensive financial planning and analysis to help clients make informed investment decisions. Our financial consultants evaluate your financial situation, assess risks, and develop strategies to optimize your investments. We provide guidance on asset allocation, tax strategies, and retirement planning, helping you achieve your financial objectives.',
      image: 'https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww', // Replace with actual image URL
    },
    {
      title: 'Legal Consultation',
      description: 'Advising clients on various legal matters, including contracts, compliance, and dispute resolution. Our legal consultants bring extensive expertise in different areas of law, ensuring you understand your rights and obligations. We assist with drafting legal documents, negotiating agreements, and representing your interests in legal proceedings.',
      image: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?cs=srgb&dl=pexels-rebrand-cities-581004-1367276.jpg&fm=jpg', // Replace with actual image URL
    },
    {
      title: 'Marketing Consultation',
      description: 'Assisting businesses in developing effective marketing strategies and campaigns to reach their target audience. Our marketing consultants analyze market trends, consumer behavior, and competitive landscapes to create tailored marketing plans. We help you implement multi-channel marketing strategies, optimize your digital presence, and enhance brand visibility.',
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'IT Consultation',
      description: 'Providing guidance on technology implementation, cybersecurity, and IT infrastructure management. Our IT consultants assess your current technology landscape and recommend solutions that enhance operational efficiency and security. We help you navigate digital transformations, implement cloud solutions, and ensure compliance with industry regulations.',
      image: 'https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg', // Replace with actual image URL
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Consultation Services</h1>
      {consultations.map((consultation, index) => (
        <ConsultationInfo 
          key={index}
          number={index + 1} // Dynamic number before title
          title={consultation.title}
          description={consultation.description}
          image={consultation.image}
        />
      ))}
      <BackButton />
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '40px 20px',
    backgroundColor: '#f7f7fb',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: '3rem',
    marginBottom: '40px',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '900px',
    width: '100%',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    margin: '20px auto',
  },
  textContainer: {
    flex: 2,
    textAlign: 'left',
    paddingRight: '20px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#2a2a2a',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#555',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer',
  },
  // Media query for responsive design
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    imageContainer: {
      marginTop: '20px',
    },
  },
};

export default Consultation;
