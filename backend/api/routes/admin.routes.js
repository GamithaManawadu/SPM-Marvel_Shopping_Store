const express = require('express')
const Router = express.Router()
const Customer = require("../models/customer.model")

const {   customersCount } = require("../controllers/admin.controller");

Router.get("/customercount", customersCount)







module.exports = Router;