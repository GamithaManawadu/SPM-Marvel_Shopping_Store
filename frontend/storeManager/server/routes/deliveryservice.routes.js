const express = require("express");
const router = express.Router();
const {
	getAllDeliveryServices,
	addDeliveryService,
	getDeliveryServiceDetails,
	deleteDeliveryService,
	updateDeliveryService
} = require("../controllers/deliveryservice.controller");
// verifyAdminAuth = require("../auth/verifyAdminAuth");
// verifyCustomerAuth = require("../auth/verifyCustomerAuth");

//.get("/", verifyAdminAuth, getAllDeliveryServices);
router.get("/", getAllDeliveryServices);
router.get("/:id", getDeliveryServiceDetails);
router.post("/add", addDeliveryService);
router.delete("/:id", deleteDeliveryService);
router.put("/:id", deleteDeliveryService);

module.exports = router;