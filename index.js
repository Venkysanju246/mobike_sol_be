const express = require("express")
const connectionToDb = require("./connection/db")
const complainspost = require("./controllers/complains.controller")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/mobile", complainspost)
require("dotenv").config()

app.listen(process.env.port, async () => {
    await connectionToDb
    console.log("connected to db")
    console.log("connected to server")
})