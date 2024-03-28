import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  // Determine if the user is logged in by checking local storage.
  const userLoggedIn = typeof window !== 'undefined' && isLoggedIn();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
            Student Management System
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          {userLoggedIn ? (
            <>
              {/* Display dashboard links based on the user's role stored in local storage */}
              <Button color="inherit" component={Link} href={`/${localStorage.getItem('userRole')}-dashboard`}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} href="/login">
                Sign In
              </Button>
              <Button color="inherit" component={Link} href="/signup">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function isLoggedIn() {
  // Check local storage for user data to determine if logged in
  return !!localStorage.getItem('user');
}

function handleLogout() {
  // Clear user data from local storage on logout
  localStorage.removeItem('user');
  localStorage.removeItem('userRole');
  // Redirect to home page or login page as needed
  window.location.href = '/';
}

export default Header;
