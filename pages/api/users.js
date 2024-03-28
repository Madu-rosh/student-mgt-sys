import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch and return users
    const users = await prisma.user.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    const { name, email, password, action } = req.body;

    if (action === 'signup') {
      // Handle signup
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields for signup' });
      }
      try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });
        return res.status(201).json(user);
      } catch (error) {
        if (error.code === 'P2002') {
          return res.status(409).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Internal server error' });
      }
    } else if (action === 'login') {
      // Handle login
      if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields for login' });
      }
      try {
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }
        // Here, you would typically generate a token or session for the user
        // This example simply returns the user's data minus the password
        const { password: _, ...userData } = user;
        return res.status(200).json(userData);
      } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
