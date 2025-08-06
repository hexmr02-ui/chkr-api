export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Welcome to the API root.',
    reminder: 'Use /api/check?cc=card|month|year|cvv to check cards.',
    example: '/api/check?cc=5121079814754898|05|2029|742'
  });
}
