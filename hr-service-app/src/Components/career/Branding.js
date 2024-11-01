import React from 'react';
import BackButton from '../BackButton';

// BrandingInfo Component for different types of branding services
const BrandingInfo = ({ number, title, description, image }) => {
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

// Branding Component
const Branding = () => {
  const brandingServices = [
    {
      title: 'Corporate Branding',
      description: 'Developing a cohesive brand identity that reflects your company’s values and mission. This includes logo design, brand messaging, and creating a visual style guide to maintain consistency across all platforms and communications.',
      image: 'https://vickiweinberg.com/wp-content/uploads/2019/11/Copy-of-How-to-ship-and-store-your-products.png', // Replace with actual image URL
    },
    {
      title: 'Product Branding',
      description: 'Creating a unique identity for your product to distinguish it from competitors. This involves designing packaging, promotional materials, and brand positioning strategies to appeal to target audiences.',
      image: 'https://admin.itsnicethat.com/images/59hyQIvMuBrJ795QQznfBzMXTJk=/241508/format-webp%7Cwidth-1440/WELOVENYC-Out_of_Home_TimesSq_Cube.png', // Replace with actual image URL
    },
    {
      title: 'Personal Branding',
      description: 'Helping individuals establish their unique identity in the marketplace. This service includes social media branding, professional website design, and reputation management to showcase your expertise and personality effectively.',
      image: 'https://htmlburger.com/blog/wp-content/uploads/2023/12/Branding-Templates-Luxurious-Black-Orange-White-Business-Stationery-Brand-Set-Template.png', // Replace with actual image URL
    },
    {
      title: 'Digital Branding',
      description: 'Enhancing your online presence through effective digital marketing strategies. This includes SEO, content marketing, and social media campaigns to build brand awareness and engage with your audience online.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3FA2V9Dj4hvEEqYiZkom8V6QdT5XmI2b-Q&s', // Replace with actual image URL
    },
    {
      title: 'Event Branding',
      description: 'Creating a unique brand experience for events, including conferences, trade shows, and product launches. This encompasses event logo design, signage, promotional materials, and overall theme development.',
      image: 'https://inkbotdesign.com/wp-content/uploads/2023/05/event-branding-guide-1024x768.webp', // Replace with actual image URL
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Branding Services</h1>
      {brandingServices.map((service, index) => (
        <BrandingInfo 
          key={index}
          number={index + 1} // Dynamic number before title
          title={service.title}
          description={service.description}
          image={service.image}
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

export default Branding;
