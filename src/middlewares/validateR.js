const jwt = require("jsonwebtoken");

const validateR = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer" || !token) {
      generateError("Formato de token no válido.", 400);
    }

    const tokenP = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = tokenP;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateR;
