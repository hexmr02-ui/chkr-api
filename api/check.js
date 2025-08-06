export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Only GET method is allowed' });
    return;
  }

  const card = req.query.cc;
  if (!card) {
    res.status(400).json({ error: 'Query parameter "cc" is required' });
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
