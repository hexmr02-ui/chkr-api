export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Only GET method is allowed' });
    return;
  }

  const card = req.query.cc;

  if (!card) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      message: '🧪 Welcome to the CC Checker API endpoint',
      usage: '/api/check?cc=card|month|year|cvv',
      example: '/api/check?cc=5121079814754898|05|2029|742'
    });
    return;
  }

  try {
    const response = await fetch('https://api.chkr.cc/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: card })
    });

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
