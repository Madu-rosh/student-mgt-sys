
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle login
    return res.status(200).json({ message: 'Login Successful' })
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
