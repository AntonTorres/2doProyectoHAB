const getPool = require("../../database/getPool");

const updateServiceById = async (service) => {
  const { tittle, explication, resolve, id } = service;

  const pool = getPool();

  await pool.query(
    "UPDATE services SET tittle = ?, explication = ?, resolve = ? WHERE id = ?",
    [tittle, explication, resolve, id]
  );
};

module.exports = updateServiceById;
