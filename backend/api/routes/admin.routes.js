const express = require('express')
const Router = express.Router()
const Customer = require("../models/customer.model")

const {   customersCount } = require("../controllers/admin.controller");



Router.get("/customercount", customersCount)

Router.route('/').get(function(req, res) {
    Customer.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

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
            user.firstname = req.body.firstname;
			user.lastname = req.body.lastname;
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