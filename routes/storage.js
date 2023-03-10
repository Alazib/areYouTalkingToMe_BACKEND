const express = require("express")
const {
  getItem,
  getItems,
  deleteItem,
  createItem,
} = require("../controllers/storage")
const { validatorGetItem } = require("../validators/storage")

const uploadMiddleware = require("../utils/handleStorage")

const router = express.Router()
router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.delete("/:id", validatorGetItem, deleteItem)

router.post("/", uploadMiddleware.single("myFile"), createItem)

module.exports = router
