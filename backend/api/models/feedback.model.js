const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("feedbacks", feedbackSchema);