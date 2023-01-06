const jwt = require("jsonwebtoken");
const generateError = require("../../utils/generateError");
const { insertService } = require("../../repositories/services");

const createService = async (req, res, next) => {
  try {
    const {authorization: token} = req.headers;

    const tokenP = jwt.verify(token, process.env.JWT_SECRET);


    
    const { tittle, explication } = req.body;

    if (!tittle || !explication) {
      generateError("Se requiere el título y la descripción", 400);
    }

    const insertId = insertService(tittle, explication);

    res.status(201).send({
      status: "ok",
      data: { id: insertId, tittle, explication, userId: 1 },
    });


  } catch (error) {
    next(error);
  }
};

module.exports = createService;



