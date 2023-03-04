const { tracksModel } = require("../models")
const { handleHttpError } = require("../utils/handleErrors")

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({})
    res.send({ data })
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS")
  }
}

const getItem = (req, res) => {}

const createItem = async (req, res) => {
  try {
    const { body } = req
    const data = await tracksModel.create(body)
    res.send(data)
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEM")
  }
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
