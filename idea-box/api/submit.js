const { cmd } = require('./_redis');
const COLORS = ['#FFD84D', '#FF8FB1', '#6EE7B7', '#7CC4FF', '#FFA552'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const b = req.body || {};
  const text = String(b.text || '').trim().slice(0, 500);
  if (!text) return res.status(400).json({ error: 'empty' });
  const color = COLORS.includes(b.color) ? b.color : COLORS[0];
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  try {
    // Only the text, colour and time are stored. Nothing that identifies the sender.
    await cmd('LPUSH', 'ideas', JSON.stringify({ id, text, color, ts: Date.now() }));
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'storage' });
  }
};
