const express = require("express");
const router = express.Router();
const {
	getAllDeliveryServices,
	addDeliveryService,
	getDeliveryServiceDetails,
} = require("../controllers/deliveryservice.controller");
// const verifyAdminAuth = require("../auth/verifyAdminAuth");
// const verifyCustomerAuth = require("../auth/verifyCustomerAuth");

router.get("/", getAllDeliveryServices);
router.get("/:id", getDeliveryServiceDetails);
router.post("/add", addDeliveryService);

module.exports = router;