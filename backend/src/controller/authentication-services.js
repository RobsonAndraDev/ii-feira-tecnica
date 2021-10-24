const jwt = require("jsonwebtoken");
const privateKey = "chave";

function getToken(username, password) {
  const token = jwt.sign({ username, password }, privateKey, {
    expiresIn: "2m",
  });

  return token;
}

function validateToken(token) {
  if (!token) {
    return {error: "Not logged in", code: 401};
  }

  try {
    const decoded = jwt.verify(token, privateKey);
    return { ...decoded, code: 200 }
  } catch (e) {
    console.log(e);
    return {error: "Unauthorized", code: 403};
  }
}

module.exports = {
  getToken,
  validateToken
}
