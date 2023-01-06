const bcrypt = require("bcrypt");
const generateError = require("../../utils/generateError");
const { selectUserByEmail, insertUser } = require("../../repositories/users");

const createUser = async (req, res, next) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      generateError("Se requiere nombre, contraseña y email", 400);
    }

    const userWithSameEmail = await selectUserByEmail(email);

    if (userWithSameEmail) {
      generateError("Ese email ya está registrado", 400);
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    const insertId = await insertUser({
      name,
      encryptedPass,
      email,
    });

    res.status(200).send({ status: "ok", data: { id: insertId, name, email } });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
