const getPool = require("../../database/getPool");

const insertUser = async (user) => {
  const { name, encryptedPass, email } = user;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (name, password, email) VALUES (?, ?, ?)",
    [name, encryptedPass, email]
  );

  return insertId;
};

module.exports = insertUser;
