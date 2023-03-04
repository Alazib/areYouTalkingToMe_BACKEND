const multer = require("multer")

//This is the Multer storage disk --> /storage takes files and saves them.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`
    cb(null, pathStorage)
    console.log(`MULTER STORAGE: aquí se guarda ${__dirname}/../storage`)
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${extension}`
    cb(null, filename)
    console.log(`MULTER STORAGE: este es el nombre del archivo ${filename}`)
  },
})

//This is a middleware who says where I save the file and what's the file name.
const uploadMiddleware = multer({
  storage: storage,
})
module.exports = uploadMiddleware
