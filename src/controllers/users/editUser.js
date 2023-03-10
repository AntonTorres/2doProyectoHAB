const generateError = require("../../utils/generateError");
const { selectUserById, updateUserById } = require("../../repositories/users");
const { userIdSchema } = require("../../schemas/users");

const editUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userIdSchema.validateAsync(id);

    const user = await selectUserById(id);

    if (!user) {
      generateError(
        "El usuario que estás intentando modificar no existe.",
        400
      );
    }

    const logedUserId = req.auth.id;

    if (user.id !== logedUserId) {
      generateError("No tienes permiso para modificar este usuario.", 401);
    }

    const { name, password, email, biography, photo } = req.body;

    if (!name && !password && !email && !biography && !photo) {
      generateError("Necesitas realizar una modificación.", 400);
    }

    await updateUserById({ ...user, ...req.body });

    res.status(200).send({ status: "ok", data: { ...user, ...req.body } });
  } catch (error) {
    next(error);
  }
};

module.exports = editUser;
