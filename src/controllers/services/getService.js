const { selectService } = require("../../repositories/services");

const getService = async (req, res, next) => {
  try {
    const service = await selectService();

    res.status(200).send({ status: "ok", data: service });
  } catch (error) {
    next(error);
  }
};

module.exports = getService;
