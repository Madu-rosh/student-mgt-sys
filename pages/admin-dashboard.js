
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

function AdminDashboard() {
  // Placeholder data
  const users = [
    { id: 1, name: 'Alice', role: 'Teacher' },
    { id: 2, name: 'Bob', role: 'Student' },
    // Add more users here
  ];

  return (
    <>
    <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Summary Cards */}
          <Grid item xs={12} md={4} lg={3}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total Users
                </Typography>
                <Typography variant="h5">
                  {users.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more cards here */}
          
          {/* User Management Table */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                User Management
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          
          {/* Settings Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              <form>
                <TextField
                  label="System Email"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Notification Threshold"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary">
                  Save Settings
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AdminDashboard;
