import React from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';

const MarketingInfo = ({ number, title, description, image }) => {
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

const DigitalMarketingServices = () => {
  const history = useHistory();

  const marketingServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'SEO is the process of optimizing your website to rank higher in search engine results, improving visibility and organic traffic. It includes keyword research, content optimization, and link building to enhance your online presence.',
      image: 'https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg',
    },
    {
      title: 'Content Marketing',
      description: 'Content marketing involves creating valuable, relevant content to attract and engage a target audience. This strategy focuses on storytelling, blogging, videos, and infographics to foster relationships and brand loyalty.',
      image: 'https://assetdigitalcom.com/wp-content/uploads/2023/05/B2B-Digital-Marketing-Agency-scaled.jpeg',
    },
    {
      title: 'Social Media Marketing',
      description: 'Social media marketing leverages platforms like Facebook, Instagram, and Twitter to connect with audiences, promote products, and increase brand awareness through engaging content and social interaction.',
      image: 'https://www.shutterstock.com/image-photo/digital-marketing-business-using-drawing-260nw-1099395098.jpg',
    },
    {
      title: 'Email Marketing',
      description: 'Email marketing is a powerful tool for communicating directly with customers. It involves sending targeted messages and promotions to nurture leads, retain customers, and drive conversions.',
      image: 'https://lauremedia.com/wp-content/uploads/2023/11/DIGITAL-MARketing-services-Laure-Media-Digital-Marketing-agency-USA.jpg',
    },
    {
      title: 'Pay-Per-Click Advertising (PPC)',
      description: 'PPC advertising allows businesses to display ads on search engines and social media platforms, paying only when a user clicks the ad. It offers immediate visibility and targeted audience reach.',
      image: 'https://c8.alamy.com/comp/MYFKTH/digital-marketing-media-website-ad-email-social-network-seo-video-mobile-app-in-virtual-screenbusinessman-hand-and-server-room-background-as-MYFKTH.jpg',
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Digital Marketing Services</h1>
      <div style={styles.servicesContainer}>
        {marketingServices.map((service, index) => (
          <MarketingInfo 
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

export default DigitalMarketingServices;
