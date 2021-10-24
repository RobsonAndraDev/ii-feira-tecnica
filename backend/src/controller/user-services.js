const { getToken } = require("./authentication-services.js");
const users = require('./user-model')

function login(username, password) {
  let user = users.filter((u) => u.username == username);
  if (user.length == 0) {
    return {error: "User not found", code: 401}
  }

  user = user.filter((u) => u.username == username && u.password == password);
  if (user.length == 0) {
    return {error: "Wrong password", code: 401}
  }

  const token = getToken(username, password);

  return {...token, code: 200};
}

function getUsers() {
  return users.map(u => ({ username: u.username}))
}

module.exports = {
  login,
  getUsers
}
