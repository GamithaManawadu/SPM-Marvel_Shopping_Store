const express = require("express");
const Customer = require("../models/customer.model")
const router = express.Router();
const {
	getAllCustomers,
	saveCustomer,
	getCustomerDetails,
} = require("../controllers/customer.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");
const verifyCustomerAuth = require("../auth/verifyCustomerAuth");
const Router = require("./admin.routes");

router.get("/", verifyAdminAuth, getAllCustomers);
router.get("/my", verifyCustomerAuth, getCustomerDetails);
router.post("/create", saveCustomer);



module.exports = router;
