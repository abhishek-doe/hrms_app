const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3040
const app = express()
const cors = require("cors")
const connectDB = require("./config/dbConnection")

connectDB()
app.use(cors())
app.use(express.json())
app.use('/employee', require('./routes/employeeRoutes'))
app.use('/holiday', require('./routes/holidayRouter'))

app.listen(PORT, (req,res) => {
    console.log(`Server Running on port ${PORT}`)
})