const express = require("express");
const Router = express.Router();

const {
  GetAllNotices,
  CreateNotice,
} = require("../controllers/blog.controller");

Router.get("/", GetAllNotices);
Router.get("/", CreateNotice);

module.exports = Router;
