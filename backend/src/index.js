const express = require("express");
const bodyParser = require("body-parser");
const { validateToken } = require("./middlewares/authentication");
const loginControler = require("./use-cases/login");
app = express();

app.use(bodyParser.json());
app.use(validateToken);
loginControler.set(app);

app.listen(3000, () => {
  console.log("magic happens on 3000");
});
