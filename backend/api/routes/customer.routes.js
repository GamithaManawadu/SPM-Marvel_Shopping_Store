const express = require("express");
const router = express.Router();
const {
	getAllCustomers,
	saveCustomer,
	getCustomerDetails,
} = require("../controllers/customer.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");
const verifyCustomerAuth = require("../auth/verifyCustomerAuth");

router.get("/", verifyAdminAuth, getAllCustomers);
router.get("/my", verifyCustomerAuth, getCustomerDetails);
router.post("/create", saveCustomer);

module.exports = router;
