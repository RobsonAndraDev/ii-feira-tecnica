const axios = require("axios");
const BASE_API_URL = "http://localhost:5000";

async function login(username, password) {
  const { data } = await axios.post(`${BASE_API_URL}/login`, {
    username,
    password,
  });
  return data;
}

module.exports = {
  login,
};
