// api/add-module.js
export default async function handler(req, res) {
  try {
    const title = (req.method === 'POST') ? req.body && req.body.title : req.query.title;
    if (!title || String(title).trim() === '') {
      return res.status(400).json({ ok: false, error: 'Missing title' });
    }

    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SUPABASE_URL || !SERVICE_KEY) {
      return res.status(500).json({ ok: false, error: 'Missing server env' });
    }

    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/modules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify([{ title: String(title) }])
    });

    const data = await insertRes.json();
    if (!insertRes.ok) {
      return res.status(insertRes.status).json({ ok: false, error: data });
    }

    return res.status(200).json({ ok: true, rows: data });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
