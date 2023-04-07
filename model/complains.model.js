const mongoose = require("mongoose")

const complaianSchema = mongoose.Schema({
    name: String,
    complaint: String,
    mobile_model: String,
    price: Number,
    phone: Number,
    others: String
})

const complainModel = mongoose.model("complains", complaianSchema)

module.exports = complainModel