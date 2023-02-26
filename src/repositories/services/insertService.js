const getPool = require("../../database/getPool");

const insertService = async (service) => {
  const { tittle, explication, userId, file, resolve } = service;

  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO services (tittle, explication, userId, file, resolve) VALUES (?, ?, ?, ?, ?)",
    [tittle, explication, userId, file, resolve]
  );
  return insertId;
};

module.exports = insertService;
