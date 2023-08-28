const express = require("express")
const router = express.Router()
const {addHoliday, getHoliday, deleteHoliday} = require("../controller/holidayController")

router.route("/").post(addHoliday).get(getHoliday)
router.route("/:id").delete(deleteHoliday)

module.exports = router