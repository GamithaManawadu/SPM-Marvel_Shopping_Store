const express = require("express");
const Customer = require("../models/customer.model")
const router = express.Router();
const {
	getAllCustomers,
	saveCustomer,
	getCustomerDetails,
    deleteCustomer,
    getUserprofileDetails,
	updateUserProfile,

} = require("../controllers/customer.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");
const verifyCustomerAuth = require("../auth/verifyCustomerAuth");

router.get("/:id", verifyAdminAuth, getCustomerDetails);
router.post("/register", saveCustomer);
router.get("/", getAllCustomers);
router.get("/my", verifyCustomerAuth, getCustomerDetails);
router.post("/create", saveCustomer);
router.delete("/:id", deleteCustomer);
router.get("/userProfile", verifyCustomerAuth, getUserprofileDetails);
router.put("/updateUserProfile/:id", verifyCustomerAuth, updateUserProfile);





module.exports = router;
