const userService = require('./user-services')

function set(app) {
  app.post("/login", login);
  app.get("/users", getUsers);
}

function login(req, res, next) {
  const { username, password } = req.body;

  return res.json(userService.login(username, password))
}

function getUsers(req, res) {
  return res.json(userService.getUsers());
}

module.exports = {
  set,
};
