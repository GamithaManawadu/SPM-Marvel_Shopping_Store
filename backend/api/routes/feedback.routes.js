const express = require('express');
const Feedback = require('../models/feedback.model');
const feedbackRoutes = express.Router();

feedbackRoutes.route('/add').post(function(req, res) {
    let item = new Feedback(req.body);
    item.save()
        .then(item => {
            res.status(200).json({'item': 'feedback added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new feedback failed');
        });
});

feedbackRoutes.route('/').get(function(req, res) {
    Feedback.find(function(err, users) {
            if (err) {
                console.log(err);
            } else {
                res.json(users);
            }
        });
});

feedbackRoutes.route('/:id').delete(function(req, res) {
    Feedback.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data is deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = feedbackRoutes;