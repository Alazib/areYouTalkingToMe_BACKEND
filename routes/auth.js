const express = require("express")
const { matchedData } = require("express-validator")
const { validatorRegister, validatorLogin } = require("../validators/auth")

const router = express.Router()

router.post("/register", validatorRegister, (req, res) => {
  req = matchedData(req)
  res.send({ data: req })
})

module.exports = router
