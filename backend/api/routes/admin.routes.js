const express = require('express')
const Router = express.Router()

const { approveNotice , getNotice , attendeesCount, researchersCount , presentersCount} = require("../controllers/admin.controller");


Router.get("/getnotice", getNotice)
Router.patch("/accept/:id" , approveNotice)
Router.get("/attendeecount", attendeesCount)
Router.get("/researcherscount" , researchersCount)
Router.get("/presenterscount", presentersCount)


module.exports = Router;