const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleErrors")

const getItems = async (req, res) => {
  const data = await tracksModel.find({})
  res.send({ data })
}

const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
}

const createItem = async (req, res) => {
  const { body } = req

  const data = await tracksModel.create(body)

  res.send(data)
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
