const Employee = require("../model/employeemodel")
const asyncHandler = require("express-async-handler")

const getEmployees = asyncHandler(async (req, res) => {
    const employee = await Employee.find({})
    if (!employee) {
        res.status(404)
        throw new Error("User not found")
    }
    res.status(200).json(employee)
})

const createEmployee = asyncHandler(async (req, res) => {
    const { id, name, email, position, department, shift, salary, password } = req.body
    if (!name && email && position && department && shift && salary && password) {
        res.status(400)
        throw new Error("All Fields are Mandatory")
    }
    const already = await Employee.findOne({ email });
    if (already) {
        throw new Error("User Already Exists");
    }
    const contact = await Employee.create({
        id, name, email, position, department, salary, shift, password
    })
    res.status(200).json(contact)
})

const deleteEmployee = asyncHandler(async (req, res) => {
    const contact = await Employee.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact Not Found")
    }
    await Employee.deleteOne({ _id: req.params.id })
    res.status(200).json(contact)

})

module.exports = { getEmployees, createEmployee, deleteEmployee }