import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

const sections = [
  { title: 'OIL & GAS', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4TM4JIn1q1VGHKQsnlsICE72EoEqmwEEQg&s' },
  { title: 'CONSTRUCTION', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIzIrF1KbxhcXHRDUM5VtuPXZ0N9lbpyAYQ&s' },
  { title: 'SUPERMARKET', imageUrl: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Supermarkets-on-Palm-Jumeriah-Cover-17-08.jpg' },
  { title: 'HOSPITALITY', imageUrl: 'https://media.licdn.com/dms/image/D4E12AQGAv2b1yWaSwg/article-cover_image-shrink_600_2000/0/1672084999667?e=2147483647&v=beta&t=KYZwbfbR7ds2WfHE13YZDf0kh9PZu_1HfP5amc9kmh0' }
];

const CareerSections = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" style={{ color: '#D4A017', fontWeight: 'bold' }}>
        CAREER
      </Typography>
      <div style={{ width: '50px', height: '5px', backgroundColor: 'black', margin: '10px auto 30px' }}></div>
      <Grid container spacing={3} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <img src={section.imageUrl} alt={section.title} style={{ width: '100%', borderRadius: '5px' }} />
            <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold', color: '#7F7F7F' }}>
              {section.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CareerSections;