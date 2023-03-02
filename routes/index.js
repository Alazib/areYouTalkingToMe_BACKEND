const express = require("express")
const fs = require("fs")
const router = express.Router()

const PATH_ROUTES = __dirname

const removeJsExtension = (fileName) => {
  return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeJsExtension(file)
  if (name !== "index") {
    console.log(PATH_ROUTES)
    console.log(`Cargando ruta ${name}`)
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router
