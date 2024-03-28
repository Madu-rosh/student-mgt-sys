import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, TextField, Button, Typography, CssBaseline, Box, Alert } from '@mui/material';

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await fetch('/api/users', { // Ensure this matches your API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, action: 'login' }), // Action 'login' differentiates the request
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      // Assuming 'data' includes a 'role' field indicating the user's role
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('userRole', data.role); // Assuming the response includes a 'role' field
      // Redirect the user to the appropriate dashboard
      console.log('Login successful:', data);

      // Redirect the user to the appropriate dashboard
      window.location.href = `/${data.role}-dashboard`;

      router.push(window.location.href);

    } catch (err) {
      setError(err.message);
      console.error('Login attempt failed:', err.message);
    }
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">Sign in</Typography>
          {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Sign In</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
