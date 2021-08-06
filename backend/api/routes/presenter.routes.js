const express = require("express");
const router = express.Router();
const {
	getAllPresenters,
	savePresenter,
	getPresenterDetails,
} = require("../controllers/presenter.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");
const verifyPresenterAuth = require("../auth/verifyPresenterAuth");

router.get("/", verifyModeratorAuth, getAllPresenters);
router.get("/my", verifyPresenterAuth, getPresenterDetails);
router.post("/create", savePresenter);

module.exports = router;
