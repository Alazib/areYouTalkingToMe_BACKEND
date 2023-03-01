const express = require("express")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`
    console.log(__dirname, "hola")
    cb(null, pathStorage)
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${extension}`
    cb(null, filename)
  },
})

const uploadMiddleware = multer({
  storage: storage,
})

router.post("/", uploadMiddleware.single("myFile"), (req, res) => {
  res.send({ a: 1 })
})

module.exports = router
