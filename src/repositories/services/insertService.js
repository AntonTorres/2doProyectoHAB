const getPool = require("../../database/getPool");

const insertService = async (service) => {
  const { tittle, explication, userId } = service;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO services (tittle, explication, userId) VALUES (?, ?, ?)",
    [tittle, explication, userId]
  );
  return insertId;
};

module.exports = insertService;
