const users = require('./model')

function getUsers() {
  return users.map(u => ({ username: u.username}))
}

module.exports = {
  getUsers
}
