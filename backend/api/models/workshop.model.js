const mongoose = require("mongoose");

const WorkshopSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	dueDate: { type: Date, required: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "presenters",
	},
	src: { type: String, required: true, trim: true },
	createdAt: { type: Date, required: true, default: Date.now() },
	isApproved: { type: String, required: true, trim: true, default: "pending" },
});

const Workshop = mongoose.model("workshops", WorkshopSchema);

module.exports = Workshop;
