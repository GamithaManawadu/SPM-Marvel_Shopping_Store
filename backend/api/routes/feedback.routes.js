const express = require("express");
const Router = express.Router();
const Feedback = require("../models/feedback.model");
const feedbackRoutes = express.Router();

//add a feedback
Router.route("/add").post(function (req, res) {
  let item = new Feedback(req.body);
  item
    .save()
    .then((item) => {
      res.status(200).json({ item: "feedback added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new feedback failed");
    });
});

//get all feedbacks
Router.get("/", (req, res) => {
  Feedback.find().exec((err, feedbacks) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, feedbacks: feedbacks });
  });
});

//delete a feedback
Router.delete("/:id", (req, res) => {
  Feedback.findByIdAndDelete(req.params.id).exec((err, deleteFeedback) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteFeedback);
  });
});

module.exports = feedbackRoutes;
module.exports = Router;