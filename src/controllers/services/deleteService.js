const generateError = require("../../utils/generateError");
const {
  selectServiceById,
  deleteServiceById,
} = require("../../repositories/services");

const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;

    const service = await selectServiceById(id);

    if (!service) {
      generateError("El servicio no existe.", 400);
    }

    await deleteServiceById(id);

    res
      .status(200)
      .send({ status: "ok", message: "Servicio eliminado correctamente." });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteService;
