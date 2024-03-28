const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  
  // Hash passwords
  const hashedPasswordAdmin = await bcrypt.hash('admin123', saltRounds);
  const hashedPasswordTeacher = await bcrypt.hash('teacher123', saltRounds);
  const hashedPasswordStudent = await bcrypt.hash('student123', saltRounds);
  
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPasswordAdmin, // Use the hashed password
      role: 'admin',
    },
  });
  
  const teacher = await prisma.user.create({
    data: {
      name: 'Teacher',
      email: 'teacher@example.com',
      password: hashedPasswordTeacher, // Use the hashed password
      role: 'teacher',
    },
  });
  
  const student = await prisma.user.create({
    data: {
      name: 'Student',
      email: 'student@example.com',
      password: hashedPasswordStudent, // Use the hashed password
      role: 'student',
    },
  });

  console.log({ admin, teacher, student });

  // Create courses
  const course1 = await prisma.course.create({
    data: {
      title: 'Introduction to Prisma',
      teacherId: teacher.id,
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'Advanced Prisma Techniques',
      teacherId: teacher.id,
    },
  });

  await prisma.enrollment.create({
    data: {
      studentId: student.id,
      courseId: course1.id,
    },
  });

  await prisma.enrollment.create({
    data: {
      studentId: student.id,
      courseId: course2.id,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
