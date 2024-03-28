
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import Link from 'next/link';

function TeacherDashboard() {
  return (
    <>
    <Header />
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          {/* Example content - this can be replaced with specific dashboard content */}
          <Typography variant="h6" component="h2">
            Courses Managed
          </Typography>
          {/* Link to manage courses page (example) */}
          <Link href="/manage-courses" passHref>
            <Button variant="contained" color="primary">
              Manage Courses
            </Button>
          </Link>
        </Paper>
      </Box>
    </Container>
    <Footer />
    </>
  );
}

export default TeacherDashboard;
