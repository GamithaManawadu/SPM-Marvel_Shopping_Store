const express = require('express')
const Router = express.Router();

const { addPayment, getPayments } = require("../controllers/payment.controller")

Router.get("/", getPayments )
Router.post("/addPayment", addPayment)

module.exports = Router;