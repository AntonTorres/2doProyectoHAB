const getPool = require("../../database/getPool");

const selectCommentBySerAndUser = async (serviceId, userId) => {
  const pool = getPool();

  const [[ides]] = await pool.query(
    `SELECT userId, serviceId FROM comments `,
    [userId, serviceId]
  );

  return ides;
};

module.exports = selectCommentBySerAndUser;
