const express = require("express");
const router = express.Router();
const { getConference } = require("../controllers/conference.controller");

router.get("/", getConference);

module.exports = router;
