const express = require("express")
const { getItems } = require("../controllers/tracks")
const router = express.Router()

router.get("/", getItems)

module.exports = router
