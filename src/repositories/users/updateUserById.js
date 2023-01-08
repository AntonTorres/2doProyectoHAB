const getPool = require("../../database/getPool");

const updateUserById = async (user) => {
  const { name, password, email, biography, photo, id } = user;

  const pool = getPool();

  await pool.query(
    "UPDATE users SET name = ?, password = ?, email = ?, biography = ?, photo = ? WHERE id = ?",
    [name, password, email, biography, photo, id]
  );
};

module.exports = updateUserById;
