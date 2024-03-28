import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            About the Student Management System
          </Typography>
          <Typography variant="body1" paragraph>
            The Student Management System is a comprehensive platform designed to facilitate the management of student data, course enrollment, and educational administration. It serves as a bridge between students, teachers, and administrative staff, offering a seamless, intuitive interface for managing academic records, schedules, and more.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to simplify the complexities of educational management through technology, providing tools that assist in the delivery of education while enhancing the learning experience for students. The system is built with scalability and ease of use in mind, ensuring that educational institutions of all sizes can benefit from our platform.
          </Typography>
          <Typography variant="body1" paragraph>
            Key features include student registration, course enrollment, grade tracking, and reporting, all integrated into a user-friendly online platform. With a focus on security, reliability, and accessibility, the Student Management System aims to empower educators and students alike.
          </Typography>
        </Paper>
      </Container>
      <Footer/>
    </>
  );
};

export default About;
