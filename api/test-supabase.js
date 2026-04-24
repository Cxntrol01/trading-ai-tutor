// api/test-supabase.js
console.log("DEBUG SUPABASE_URL=", (process.env.SUPABASE_URL||"(empty)").replace(/https:\/\/[^/]+/,"https://REDACTED"), "DEBUG KEY LEN=", (process.env.SUPABASE_SERVICE_ROLE_KEY||"").length);
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

module.exports = async function (req, res) {
  try {
    const { data, error } = await supabase
      .from('lessons')
      .select('id,title')
      .limit(3);

    if (error) return res.status(500).json({ ok: false, error: error.message });

    return res.status(200).json({ ok: true, rows: data || [] });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || String(err) });
  }
};
