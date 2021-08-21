const express = require('express')
const Router = express.Router()

const {   customersCount } = require("../controllers/admin.controller");



Router.get("/customercount", customersCount)




module.exports = Router;