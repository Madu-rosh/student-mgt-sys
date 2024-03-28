import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Box, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const userRole = localStorage.getItem('userRole');
    if (userRole) {
      // Redirect the user to the appropriate dashboard if logged in
      router.push(`/${userRole}-dashboard`);
    }
  }, []);

  return (
    <>
      <Header />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            my: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" component={Link} href="/login" sx={{ my: 1 }}>
            Sign In
          </Button>
          <Button variant="outlined" component={Link} href="/signup">
            Sign Up
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
