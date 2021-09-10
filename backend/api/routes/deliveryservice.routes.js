const express = require("express");
const router = express.Router();
const {
	getAllDeliveryServices,
	addDeliveryService,
	getDeliveryServiceDetails,
} = require("../controllers/deliveryservice.controller");
// verifyAdminAuth = require("../auth/verifyAdminAuth");
// verifyCustomerAuth = require("../auth/verifyCustomerAuth");

//.get("/", verifyAdminAuth, getAllDeliveryServices);
router.get("/", getAllDeliveryServices);
router.get("/:id", getDeliveryServiceDetails);
router.post("/add", addDeliveryService);

module.exports = router;