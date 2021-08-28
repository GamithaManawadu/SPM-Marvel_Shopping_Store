const express = require("express");
const Customer = require("../models/customer.model")
const router = express.Router();

const {
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
router.get("/my", verifyCustomerAuth, getCustomerDetails);
router.post("/create", saveCustomer);
router.delete("/:id", deleteCustomer);
router.get("/userProfile", verifyCustomerAuth, getUserprofileDetails);
router.put("/updateUserProfile/:id", verifyCustomerAuth, updateUserProfile);

router.route('/').get(function(req, res) {
    Customer.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

router.route('/update/:id').post(function(req, res) {
    Customer.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('data is not found');
        else
            user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.username = req.body.username;
            user.email = req.body.email;
            user.contactNumber = req.body.contactNumber;
			user.address = req.body.address;

            user.save().then(user => {
                res.json('User updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

router.route('/:id').delete(function(req, res) {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
