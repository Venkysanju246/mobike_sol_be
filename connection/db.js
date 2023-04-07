const mongoose = require("mongoose");
require("dotenv").config()

const connectionToDb = mongoose.connect(process.env.mongourl)

module.exports = connectionToDb