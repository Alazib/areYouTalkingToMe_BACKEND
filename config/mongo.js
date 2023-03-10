const mongoose = require("mongoose")

const dbConnect = () => {
  const DB_URI = process.env.DB_URI
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGOOSE INFORMA: **CONEXIÓN CORRECTA***")
    })
    .catch((err) => {
      if (err) {
        console.log("MONGOOSE INFORMA: ***ERROR DE CONEXIÓN***")
      }
    })
}

module.exports = dbConnect
