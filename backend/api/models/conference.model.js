const mongoose = require("mongoose");

const ConferenceSchema = new mongoose.Schema({
	theme: { type: String, required: true, trim: true },
	venue: { type: String, required: true, trim: true },
	year: { type: String, required: true, trim: true },
	agenda: [
		{
			id: { type: String, required: true, trim: true },
			startAt: { type: Date, required: true },
			endAt: { type: Date, required: true },
			topic: { type: String, required: true, trim: true },
			content: { type: String, required: true, trim: true },
		},
	],
	startDate: { type: Date, required: true, default: Date.now() },
	agenda: [
		{
			id: { type: String, required: true, trim: true },
			name: { type: String, required: true, trim: true },
			description: { type: String, required: true, trim: true },
		},
	],
});

const Conference = mongoose.model("conferences", ConferenceSchema);

module.exports = Conference;
