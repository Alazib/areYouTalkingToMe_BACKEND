const mongoose = require("mongoose")
const mongooseSoftDelete = require("mongoose-delete")

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
)

//Implement mongoose-delete plugin & overrides native methods of Mongoose:
UserScheme.plugin(mongooseSoftDelete, { overrideMethods: "all" })
module.exports = mongoose.model("users", UserScheme)
