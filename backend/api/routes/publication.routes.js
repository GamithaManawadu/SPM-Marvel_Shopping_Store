const express = require("express");
const router = express.Router();
const {
	getAllPublications,
	savePublication,
	getApprovedPublications,
	getRejectedPublications,
	getPendingPublications,
	getPaidPublications,
	getUnpaidPublications,
	payPublications,
	approvePublications,
	rejectPublications,
	getResearcherPublications,
	getCard,
} = require("../controllers/publication.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");
const verifyResearcherAuth = require("../auth/verifyResearcherAuth");

router.get("/", verifyModeratorAuth, getAllPublications);
router.post("/create", savePublication);
router.get("/approved", getApprovedPublications);
router.get("/rejected", verifyModeratorAuth, getRejectedPublications);
router.get("/pending", verifyModeratorAuth, getPendingPublications);
router.get("/paid", verifyModeratorAuth, getPaidPublications);
router.get("/unpaid", verifyModeratorAuth, getUnpaidPublications);
router.get("/my", verifyResearcherAuth, getResearcherPublications);
router.patch("/pay/:id", verifyResearcherAuth, payPublications);
router.patch("/approve/:id", verifyModeratorAuth, approvePublications);
router.patch("/reject/:id", verifyModeratorAuth, rejectPublications);
router.get("/pending/:id", verifyModeratorAuth, getCard);
module.exports = router;