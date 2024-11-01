import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';

const DesignInfo = ({ number, title, description, image }) => {
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

const DesignServices = () => {
  const history = useHistory();

  const designs = [
    {
      title: 'Graphic Design',
      description: 'Graphic design shapes ideas into compelling visuals, transforming concepts into visually captivating layouts. This includes creating brand logos, promotional materials, print ads, and digital graphics that connect with audiences on an emotional level. Graphic design adds cohesion and voice to a brand, ensuring consistency across media.',
      image: 'https://www.alrahaprint.com/wp-content/uploads/2024/07/graphic-design.jpg',
    },
    {
      title: 'Web Design',
      description: 'Web design goes beyond just aesthetics; it combines functionality and usability with an engaging, user-centered approach. Effective web design ensures intuitive navigation, mobile responsiveness, and an immersive digital journey, with visuals and layouts that bring the brand experience online.',
      image: 'https://img.freepik.com/premium-photo/3d-web-development-application-design-coding-programme_999671-57494.jpg?w=1380',
    },
    {
      title: 'Product Design',
      description: 'Product design is a fusion of creativity, functionality, and empathy for users. It encompasses the complete journey from ideation to execution, considering form, usability, and desirability. Product designers create innovative solutions that improve everyday life, focusing on durability and user satisfaction.',
      image: 'https://media.designrush.com/articles/306662/conversions/product-design-ideas-preview.jpg',
    },
    {
      title: 'Architectural Design',
      description: 'Architectural design combines artistic vision with technical expertise to create structures that stand the test of time. It involves planning spaces with a blend of functionality, aesthetics, and sustainability, shaping both residential and commercial landscapes to inspire and serve communities.',
      image: 'https://www.designpub.org/store/1048/Architecture-course.jpg',
    },
    {
      title: 'Animation & Multimedia Design',
      description: 'Animation and multimedia design bring ideas to life through movement, sound, and color. This includes creating engaging animations, visual effects, and interactive content for films, advertisements, and digital platforms. It’s about crafting immersive stories that captivate audiences and convey complex messages in a dynamic way.',
      image: 'https://huenrig.com/wp-content/uploads/2020/07/hue-n-rig-home-page-banner.jpg',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Design Services</h1>
      <div style={styles.servicesContainer}>
        {designs.map((design, index) => (
          <DesignInfo 
            key={index}
            number={index + 1}
            title={design.title}
            description={design.description}
            image={design.image}
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

export default DesignServices;
