import React from 'react';
import { Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = [
  { title: 'HR Consulting' },
  { title: 'HR Project Management' },
  { title: 'Recruitment & Staffing' },
  { title: 'Training & Development' },
  { title: 'HR Audit and Compliance Check' },
  { title: 'Performance Management' },
  { title: 'Payroll Outsourcing' },
  { title: 'HR Outsourcing' },
  { title: 'Labour Law Compliance' }
];

const HRServices = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} style={{ textAlign: 'center' }}>
          <CheckCircleIcon style={{ fontSize: 60, color: '#1E73BE' }} />
          <Typography variant="h6" style={{ marginTop: '10px' }}>
            {service.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default HRServices;
