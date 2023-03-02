const multer = require("multer")

//This is the Multer storage disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`
    console.log(__dirname)
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

module.exports = uploadMiddleware
