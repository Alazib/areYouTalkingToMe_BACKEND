const express = require("express")
const { matchedData } = require("express-validator")
const { validatorRegister, validatorLogin } = require("../validators/auth")
const { encrypt, compare } = require("../utils/handlePassword")
const { usersModel } = require("../models")

const router = express.Router()

router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req)
  const passwordHash = await encrypt(req.password)
  const body = { ...req, password: passwordHash }
  const data = await usersModel.create(body)
  //This next line is explained in the users model.
  data.set("password", undefined, { strict: false })

  res.send(data)
})

module.exports = router
