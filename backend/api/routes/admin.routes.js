const express = require('express')
const Router = express.Router()
const Customer = require("../models/customer.model")

const {   customersCount } = require("../controllers/admin.controller");

Router.get("/customercount", customersCount)



Router.route('/:id').get(function(req, res){
    let id = req.params.id;
    Customer.findById(id, function(err, user){
        res.json(user);
    });
});

Router.route('/update/:id').post(function(req, res) {
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

Router.route('/:id').delete(function(req, res) {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = Router;