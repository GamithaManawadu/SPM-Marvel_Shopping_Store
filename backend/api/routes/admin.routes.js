const express = require("express");
const Router = express.Router();
const Customer = require("../models/customer.model");
const Admin = require("../models/moderator.model");

const { customersCount } = require("../controllers/admin.controller");

Router.get("/customercount", customersCount);

//get all admins
Router.get("/", (req, res) => {
  Admin.find().exec((err, users) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, users: users });
  });
});

//get a admin
Router.get("/:id", (req, res) => {
  let id = req.params.id;

  Admin.findById(id, function (err, user) {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, user });
  });
});

//update a admin
Router.put("/:id", (req, res) => {
  Admin.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

//delete a admin
Router.delete("/:id", (req, res) => {
  Admin.findByIdAndDelete(req.params.id).exec((err, deleteUser) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteUser);
  });
});






module.exports = Router;
