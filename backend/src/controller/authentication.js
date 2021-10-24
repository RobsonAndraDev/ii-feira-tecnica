const authenticationService = require('./authentication-services')

function validateToken(req, res, next) {
  const token = req.header("token");

  if (req.originalUrl == "/login") {
    return next();
  }

  const decoded = authenticationService.validateToken(token)

  if (decoded.code == 200) {
    req.decoded = decoded
    return next()
  }

  return res.status(decoded.code).json(decoded);
}

module.exports = {
  validateToken,
};
