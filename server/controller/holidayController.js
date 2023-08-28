const asyncHandler = require("express-async-handler")
const Holiday = require("../model/holidayModal")

const getHoliday = asyncHandler(async (req, res) => {
    const holiday = await Holiday.find({})
    if (!holiday) {
        res.status(404)
        throw new Error("User not found")
    }
    res.status(200).json(holiday)
})

const addHoliday = asyncHandler(async (req, res) => {
    const { name, date, description } = req.body
    const already = await Holiday.findOne({ name })
    if (already) {
        throw new error("holiday already added")
    }

    const holi = await Holiday.create({
        name, date, description
    })
    res.status(200).json(holi)
})

const deleteHoliday = asyncHandler( async (req, res) => {
    const holiday = await Holiday.findById(req.params.id);
    if(!holiday){
        throw new Error("holiday not found")
    }
    const deleted = await holiday.deleteOne({_id: req.params.id})
    res.status(200).json(deleted)
})

module.exports = { addHoliday, getHoliday, deleteHoliday }