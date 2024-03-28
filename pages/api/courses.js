import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all courses
    try {
      const courses = await prisma.course.findMany({
        include: {
          teacher: true, // Include teacher information
          students: true // Include enrolled students information
        },
      });
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch courses' });
    }
  } else if (req.method === 'POST') {
    // Add a new course
    const { title, teacherId } = req.body;

    // Basic validation
    if (!title || !teacherId) {
      return res.status(400).json({ error: 'Title and teacherId are required' });
    }

    try {
      const newCourse = await prisma.course.create({
        data: {
          title,
          teacherId: Number(teacherId),
        },
      });
      res.status(201).json(newCourse);
    } catch (error) {
      if (error.code === 'P2002') {
        return res.status(409).json({ error: 'Course already exists' });
      }
      res.status(500).json({ error: 'Failed to create course' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
