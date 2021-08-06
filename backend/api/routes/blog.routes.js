const express = require("express");
const router = express.Router();
const { getAllBlogs } = require("../controllers/blog.controller");

router.get("/", getAllBlogs);

module.exports = router;
