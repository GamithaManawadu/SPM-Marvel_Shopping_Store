const express = require("express");
const router = express.Router();
const {
	getAllAttendees,
	saveAttendee,
	getAttendeeDetails,
} = require("../controllers/attendee.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");
const verifyAttendeeAuth = require("../auth/verifyAttendeeAuth");

router.get("/", verifyAdminAuth, getAllAttendees);
router.get("/my", verifyAttendeeAuth, getAttendeeDetails);
router.post("/create", saveAttendee);

module.exports = router;
