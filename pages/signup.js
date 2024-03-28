import { Button, TextField, Container, Typography, CssBaseline, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header'; // Adjust path as necessary
import Footer from '../components/Footer'; // Adjust path as necessary

function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccess(false); // Reset success state

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, action: 'signup' }), // Include 'action' if your API expects it
    });

    if (response.ok) {
      // Handle success
      setSuccess(true);
      // Optionally, redirect to the login page after a successful signup
      // router.push('/login');
    } else {
      // Handle error
      const result = await response.json();
      setError(result.error || 'An error occurred. Please try again.');
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
          <Typography variant="h4">Sign Up</Typography>
          {success && <Alert severity="success" sx={{ width: '100%', mt: 2 }}>Signup successful! Please login.</Alert>}
          {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Signup;