const mongoose = require("mongoose")
const mongooseSoftDelete = require("mongoose-delete")

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
)

//Implement mongoose-delete plugin & overrides native methods of Mongoose:
StorageScheme.plugin(mongooseSoftDelete, { overrideMethods: "all" })
module.exports = mongoose.model("storages", StorageScheme)
