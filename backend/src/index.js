const app = require("express")()
const bodyParser = require("body-parser")
const fs = require('fs')
const { validateToken } = require("./middlewares/authentication")
const useCaseFolder = `${__dirname}/use-cases`

app.use(bodyParser.json());
app.use(validateToken);

fs.readdirSync(useCaseFolder).forEach(folder => {
  console.log(`Importing ${folder} controler`)
  const controler = require(`${useCaseFolder}/${folder}`)
  controler.set(app)
})

app.listen(3000, () => {
  console.log("magic happens on 3000")
});
