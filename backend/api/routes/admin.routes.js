const express = require("express");
const Router = express.Router();
const Customer = require("../models/customer.model");
const Admin = require("../models/moderator.model");

const { customersCount } = require("../controllers/admin.controller");

Router.get("/customercount", customersCount);

Router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, user) {
    res.json(user);
  });
});

Router.route("/update/:id").post(function (req, res) {
  Customer.findById(req.params.id, function (err, user) {
    if (!user) res.status(404).send("data is not found");
    else user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.username = req.body.username;
    user.email = req.body.email;
    user.contactNumber = req.body.contactNumber;
    user.address = req.body.address;

    user
      .save()
      .then((user) => {
        res.json("User updated");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

Router.route("/:id").delete(function (req, res) {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Data is deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get all admins
Router.route("/").get(function (req, res) {
  Admin.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

//get a admin
Router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Admin.findById(id, function (err, user) {
    res.json(user);
  });
});

//update a admin
Router.route("/update/:id").post(function (req, res) {
  Admin.findById(req.params.id, function (err, user) {
    if (!user) res.status(404).send("data is not found");
    else user.username = req.body.username;
    user.email = req.body.email;
    user.contact = req.body.contact;

    user
      .save()
      .then((user) => {
        res.json("User updated");
      })
      .catch((err) => {
        res.status(400).send("Update not possible");
      });
  });
});

//delete a admin
Router.route("/:id").delete(function (req, res) {
  Admin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Data is deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = Router;