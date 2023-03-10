const { storageModel } = require("../models")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleErrors")

const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({})
    res.send({ data })
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS")
  }
}

const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await storageModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
}

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
