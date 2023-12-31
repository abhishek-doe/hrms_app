const mongoose = require("mongoose")

const holidaySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Holiday', holidaySchema)