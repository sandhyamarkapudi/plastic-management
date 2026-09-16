const db = require('../config/database');
const fields = 'id, title, description, category, image, language, created_at, updated_at';
async function all(language) {
  const [rows] = await db.execute(`SELECT ${fields} FROM awareness_content ${language ? 'WHERE language = ?' : ''} ORDER BY created_at DESC`, language ? [language] : []);
  return rows;
}
async function find(id) { const [rows] = await db.execute(`SELECT ${fields} FROM awareness_content WHERE id = ?`, [id]); return rows[0]; }
async function create(item) { const [r] = await db.execute('INSERT INTO awareness_content (title, description, category, image, language) VALUES (?, ?, ?, ?, ?)', [item.title, item.description, item.category, item.image || null, item.language || 'en']); return find(r.insertId); }
async function update(id, item) { await db.execute('UPDATE awareness_content SET title=?, description=?, category=?, image=?, language=? WHERE id=?', [item.title, item.description, item.category, item.image || null, item.language || 'en', id]); return find(id); }
async function remove(id) { const [r] = await db.execute('DELETE FROM awareness_content WHERE id=?', [id]); return r.affectedRows; }
module.exports = { all, find, create, update, remove };
