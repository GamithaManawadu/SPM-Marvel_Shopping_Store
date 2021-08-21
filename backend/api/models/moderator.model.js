const mongoose = require("mongoose");

const ModeratorSchema = new mongoose.Schema({
	username: { type: String, required: true, trim: true },
	password: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true },
	contact: { type: String, required: true, trim: true },
	type: { type: String, required: true, trim: true },
});

const Moderator = mongoose.model("moderators", ModeratorSchema);

module.exports = Moderator;