const { storageModel } = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {}

const getItem = (req, res) => {}

const createItem = async (req, res) => {
  const { file } = req

  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  }
  const data = await storageModel.create(fileData)
  res.send(data)

  console.log(
    "[[3]] soy el controlador POST de storage.js: 1) He sido llamado por /routes/storage.js 2) Ya he consumido el modelo con POST 3) Ya he guardado con MULTER STORAGE el archivo"
  )
}

const updateItem = (req, res) => {}

const deleteItem = (req, res) => {}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}
