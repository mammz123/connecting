import React from 'react'; 
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';

const ServiceInfo = ({ number, title, description, image }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{number}. {title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
    </div>
  );
};

const WebDevelopmentServices = () => {
  const history = useHistory();

  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript frameworks.',
      image: 'https://img.freepik.com/free-vector/engineering-technical-drawing-isometric-landing-page_107791-5056.jpg',
    },
    {
      title: 'Backend Development',
      description: 'Building server-side applications and APIs, ensuring data management and security.',
      image: 'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
    },
    {
      title: 'Full Stack Development',
      description: 'Combining both frontend and backend skills to create complete web applications from start to finish.',
      image: 'https://permutable.ai/wp-content/uploads/2024/03/19301.jpg',
    },
    {
      title: 'DevOps Services',
      description: 'Implementing automation in the development process, improving deployment speed and efficiency.',
      image: 'https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces and experiences that enhance usability and engagement.',
      image: 'https://www.mindinventory.com/blog/wp-content/uploads/2023/11/difference-between-ui-ux.webp',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Web Development Services</h1>
      <div style={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceInfo 
            key={index}
            number={index + 1}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
      <BackButton onClick={() => history.goBack()} />
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
  servicesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
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

// Adding hover effect using JavaScript for image animations
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.07)";
      img.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    });
  });
});

export default WebDevelopmentServices;
