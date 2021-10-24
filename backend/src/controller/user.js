const userService = require('./user-services')

function set(app) {
  app.post("/login", login);
  app.get("/users", getUsers);
}

function login(req, res, next) {
  const { username, password } = req.body;

  const token = userService.login(username, password)

  return res.status(token.code).json(token)
}

function getUsers(req, res) {
  return res.json(userService.getUsers());
}

module.exports = {
  set,
};
