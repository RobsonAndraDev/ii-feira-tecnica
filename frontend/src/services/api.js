const axios = require("axios");
const BASE_API_URL = "http://172.17.0.1:3001";

async function login(username, password) {
  const { data } = await axios.post(`${BASE_API_URL}/login`, {
    username,
    password,
  });
  return data;
}

const apiService = {
  login,
};

export default apiService;
