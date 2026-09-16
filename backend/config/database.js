const mysql = require('mysql2/promise');
require('./env');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  connectTimeout: 5000,
  charset: 'utf8mb4'
});

async function verifyConnection() {
  const connection = await pool.getConnection();
  connection.release();
}

module.exports = pool;
module.exports.verifyConnection = verifyConnection;
