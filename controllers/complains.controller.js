const express = require("express")
const complainModel = require("../model/complains.model")
const complainspost = express.Router()


complainspost.post("/add", async (req, res) => {
    const payload = req.body
    const newData = new complainModel(payload)
    await newData.save()
    res.send({
        msg: "complaint registerd succesfully"
    })
})

complainspost.get("/all", async (req, res) => {
    const data = await complainModel.find()
    res.send(data)
})


module.exports = complainspost