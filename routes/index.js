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
    console.log(
      `[[1]] app.js llamando a routes/index--> Cargando ruta /${name}`
    )
    router.use(`/${name}`, require(`./${file}`))
    console.log(`[[2]] routes/index.js requiriendo a ./${file}`)
  }
})

module.exports = router
