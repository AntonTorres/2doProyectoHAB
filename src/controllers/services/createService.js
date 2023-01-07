const { insertService } = require("../../repositories/services");
const { createSerSchema } = require("../../schemas/services");

const createService = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    await createSerSchema.validateAsync(req.body);

    const { tittle, explication } = req.body;

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
