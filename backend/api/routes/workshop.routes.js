const express = require("express");
const router = express.Router();
const {
  getAllWorkshops,
  saveWorkshop,
  getApprovedWorkshops,
  getRejectedWorkshops,
  getPendingWorkshops,
  approveWorkshops,
  rejectWorkshops,
  getPresenterWorkshops,
  getWorkshopCard,
} = require("../controllers/workshop.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");
const verifyPresenterAuth = require("../auth/verifyPresenterAuth");

router.get("/", verifyModeratorAuth, getAllWorkshops);
router.post("/create", saveWorkshop);
router.get("/approved", getApprovedWorkshops);
router.get("/rejected", verifyModeratorAuth, getRejectedWorkshops);
router.get("/pending", verifyModeratorAuth, getPendingWorkshops);
router.get("/my", verifyPresenterAuth, getPresenterWorkshops);
router.patch("/approve/:id", verifyModeratorAuth, approveWorkshops);
router.patch("/reject/:id", verifyModeratorAuth, rejectWorkshops);
router.get("/pending/:id", verifyModeratorAuth, getWorkshopCard);
module.exports = router;