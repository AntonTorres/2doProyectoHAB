const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(4).max(500).required(),
  password: Joi.string().min(8).max(500).required(),
  email: Joi.string().min(15).max(500).required(),
});

module.exports = createUserSchema;
