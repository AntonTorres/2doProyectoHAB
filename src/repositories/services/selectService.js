const getPool = require("../../database/getPool");

const selectService = async () => {
  const pool = getPool();

  const service = await pool.query("SELECT * FROM services");

  return service;
};

module.exports = selectService;
