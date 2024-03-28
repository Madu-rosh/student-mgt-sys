import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Placeholder for the student's ID. In a real application, you'd retrieve this from the session or token.
  const studentId = 1; // This should be dynamically determined based on the logged-in user.

  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        studentId: studentId,
      },
      include: {
        course: true,
      },
    });

    const courses = enrollments.map(enrollment => enrollment.course);

    res.status(200).json(courses);
  } catch (error) {
    console.error("Failed to fetch student's courses:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
