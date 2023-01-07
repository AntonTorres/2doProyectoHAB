const Joi = require("joi");

const createSerSchema = Joi.object({
  tittle: Joi.string().min(4).max(500).required(),
  explication: Joi.string().min(4).max(2500).required(),
});

module.exports = createSerSchema;