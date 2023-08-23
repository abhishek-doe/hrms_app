const express = require("express")
const {getEmployees, createEmployee, deleteEmployee} = require("../controller/employeeController")
const router = express.Router()

router.route("/").get(getEmployees).post(createEmployee)
router.route("/:id").delete(deleteEmployee)

module.exports = router