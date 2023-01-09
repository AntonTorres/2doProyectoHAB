const getPool = require("../../database/getPool");

const insertComment = async (comment, userId, serviceId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO comments (comment, userId, serviceId) VALUES (?, ?, ?)",
    [comment, userId, serviceId]
  );
  return insertId;
};

module.exports = insertComment;
