const getPool = require("../../database/getPool");

const updateServiceById = async (service) => {
  const { tittle, explication, id } = service;

  const pool = getPool();

  await pool.query(
    "UPDATE services SET tittle = ?, explication = ? WHERE id = ?",
    [tittle, explication, id]
  );
};

module.exports = updateServiceById;
