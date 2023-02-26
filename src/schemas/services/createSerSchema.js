const Joi = require("joi");

const createSerSchema = Joi.object({
  tittle: Joi.string().min(4).max(500).required(),
  explication: Joi.string().min(4).max(2500).required(),
  resolve: Joi.number().integer().min(0).max(1),
  file: Joi.string().allow(null),
});

module.exports = createSerSchema;