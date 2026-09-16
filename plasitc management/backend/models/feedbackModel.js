const db = require('../config/database');
async function create(item) { const [r] = await db.execute('INSERT INTO feedback (user_name, village, district, rating, message) VALUES (?, ?, ?, ?, ?)', [item.user_name,item.village,item.district,item.rating,item.message]); return r.insertId; }
async function all() { const [rows] = await db.execute('SELECT * FROM feedback ORDER BY created_at DESC'); return rows; }
module.exports = { create, all };
