const service = require('./service')

function set(app) {
  app.post("/login", login);
}

function login(req, res, next) {
  const { username, password } = req.body;

  const token = service.login(username, password)

  return res.status(token.code).json(token)
}

module.exports = {
  set,
};
