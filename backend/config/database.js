const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('./env');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.MYSQLPORT || process.env.DB_PORT || 3306),
  user: process.env.MYSQLUSER || process.env.DB_USER,
  password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD,
  database: process.env.MYSQLDATABASE || process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 5000,
  charset: 'utf8mb4'
});

async function verifyConnection() {
  const connection = await pool.getConnection();
  connection.release();
}

async function initializeSchema() {
  const schema = fs.readFileSync(path.resolve(__dirname, '../../database/schema.sql'), 'utf8');
  const statements = schema
    .split(';')
    .map(statement => statement.trim())
    .filter(statement => statement && !/^CREATE DATABASE\b/i.test(statement) && !/^USE\b/i.test(statement));
  for (const statement of statements) {
    if (/^INSERT INTO quiz_questions\b/i.test(statement)) {
      const [rows] = await pool.query('SELECT COUNT(*) AS count FROM quiz_questions');
      if (rows[0].count > 0) continue;
    }
    await pool.query(statement);
  }
}

module.exports = pool;
module.exports.verifyConnection = verifyConnection;
module.exports.initializeSchema = initializeSchema;
