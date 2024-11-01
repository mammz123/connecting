import React from 'react';
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

const LogoDesignServices = () => {
  const services = [
    {
      title: 'Wordmark Logos',
      description: 'These logos utilize the brand name in a unique typeface, creating a strong visual identity.',
      image: 'https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/Header-Creative-Logos-For-Strong-First-Impression.png', // Replace with actual image URL
    },
    {
      title: 'Lettermark Logos',
      description: 'Lettermarks focus on initials or acronyms, making them perfect for brands with lengthy names.',
      image: 'https://4.imimg.com/data4/TV/GT/MY-8405029/logo-design-500x500.png', // Replace with actual image URL
    },
    {
      title: 'Iconic Logos',
      description: 'These logos are represented by symbols or icons that embody the brand, often without text.',
      image: 'https://media.licdn.com/dms/image/C4D12AQH-UUzO6Cc8Bw/article-cover_image-shrink_600_2000/0/1520105532782?e=2147483647&v=beta&t=ru659SyFNf9126WglOfG5huruJjGLiIAMY6gcARrMTk', // Replace with actual image URL
    },
    {
      title: 'Combination Logos',
      description: 'Combination logos merge both text and symbols, offering versatility in branding.',
      image: 'https://3.imimg.com/data3/GN/AO/MY-9747490/logo-design-500x500.jpg', // Replace with actual image URL
    },
    {
      title: 'Emblem Logos',
      description: 'Emblems feature text within a symbol, often used by institutions and organizations.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprAfyWE9Av9kpC7EmpCHLnXQ63dYFCQzshW_Kmd_MbLZHWjl9Rpc7ff_v1WDggNtebg8&usqp=CAU', // Replace with actual image URL
    },
  ];

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Our Logo Design Services</h1>
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

export default LogoDesignServices;
