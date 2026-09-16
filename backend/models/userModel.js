const db = require('../config/database');

async function findByMobile(mobile) {
  const [rows] = await db.execute('SELECT * FROM users WHERE mobile = ?', [mobile]);
  return rows[0];
}
async function findById(id) {
  const [rows] = await db.execute('SELECT id, name, mobile, village, district, role, created_at FROM users WHERE id = ?', [id]);
  return rows[0];
}
async function create(user) {
  const [result] = await db.execute('INSERT INTO users (name, mobile, village, district, password) VALUES (?, ?, ?, ?, ?)', [user.name, user.mobile, user.village, user.district, user.password]);
  return findById(result.insertId);
}
async function all() {
  const [rows] = await db.execute('SELECT id, name, mobile, village, district, role, created_at FROM users ORDER BY created_at DESC');
  return rows;
}
module.exports = { findByMobile, findById, create, all };
