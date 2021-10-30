const service = require('./service')

const set = app => {
  app.get("/users", getUsers);
}

const getUsers = (req, res) => {
  return res.json(service.getUsers());
}

module.exports = {
  set
}
