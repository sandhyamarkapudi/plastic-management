const db = require('../config/database');
async function all() { const [rows] = await db.execute('SELECT id, question, option_a, option_b, option_c, option_d, explanation FROM quiz_questions ORDER BY id'); return rows; }
async function allWithAnswers() { const [rows] = await db.execute('SELECT * FROM quiz_questions ORDER BY id'); return rows; }
async function create(q) { const [r] = await db.execute('INSERT INTO quiz_questions (question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?)', [q.question,q.option_a,q.option_b,q.option_c,q.option_d,q.correct_answer,q.explanation]); return r.insertId; }
async function update(id,q) { await db.execute('UPDATE quiz_questions SET question=?, option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=?, explanation=? WHERE id=?', [q.question,q.option_a,q.option_b,q.option_c,q.option_d,q.correct_answer,q.explanation,id]); }
async function remove(id) { const [r] = await db.execute('DELETE FROM quiz_questions WHERE id=?',[id]); return r.affectedRows; }
async function result(data) { await db.execute('INSERT INTO quiz_results (user_id, score, total_questions, percentage) VALUES (?, ?, ?, ?)', [data.userId || null,data.score,data.totalQuestions,data.percentage]); }
module.exports = { all, allWithAnswers, create, update, remove, result };
