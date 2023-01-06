const getPool = require("../../database/getPool");

const insertService = async (tittle, explication) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO services (tittle, explication, userId) VALUES (?, ?, 1)",
    [tittle, explication]
  );
  return insertId;
};

module.exports = insertService;
