import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material';

function StudentDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/student-courses'); // This matches the new API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
    <Header />
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Enrolled Courses
          </Typography>
          <List>
            {courses.length > 0 ? (
              courses.map((course) => (
                <ListItem key={course.id}>
                  <ListItemText primary={course.title} />
                </ListItem>
              ))
            ) : (
              <Typography variant="body1">You are not enrolled in any courses.</Typography>
            )}
          </List>
        </Paper>
      </Box>
    </Container>
    <Footer />
    </>
  );
}

export default StudentDashboard;
