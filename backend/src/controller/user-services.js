const { getToken } = require("./authentication-services.js");

const users = [{
  username: "admin",
  password: "123456",
}];

function login(username, password) {
  let user = users.filter((u) => u.username == username);
  if (user.length == 0) {
    return res.status(401).json({ error: "User not found" });
  }

  user = user.filter((u) => u.username == username && u.password == password);
  if (user.length == 0) {
    return res.status(401).json({ error: "Wrong password" });
  }

  const token = getToken(username, password);

  return { token };
}

function getUsers() {
  return users.map(u => ({ username: u.username}))
}

module.exports = {
  login,
  getUsers
}
