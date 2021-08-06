const express = require("express");
const router = express.Router();
const {
	getAllResearchers,
	saveResearcher,
	getResearcherDetails,
} = require("../controllers/researcher.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");
const verifyResearcherAuth = require("../auth/verifyResearcherAuth");

router.get("/", verifyModeratorAuth, getAllResearchers);
router.get("/my", verifyResearcherAuth, getResearcherDetails);
router.post("/create", saveResearcher);

module.exports = router;
