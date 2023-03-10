const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

//This is a middleware who cheks the item before being sent to the controller

const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),

  (req, res, next) => validateResults(req, res, next),
]

module.exports = { validatorGetItem }
