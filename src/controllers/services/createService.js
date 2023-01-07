const jwt = require("jsonwebtoken");
const generateError = require("../../utils/generateError");
const { insertService } = require("../../repositories/services");

const createService = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const { tittle, explication } = req.body;

    if (!tittle || !explication) {
      generateError("Se requiere el título y la descripción", 400);
    }

    const insertId = await insertService({
      tittle,
      explication,
      userId,
    });

    res.status(201).send({
      status: "ok",
      data: { id: insertId, tittle, explication, userId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createService;
