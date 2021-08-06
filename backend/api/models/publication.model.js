const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		trim: true,
		ref: "researchers",
	},
	createdAt: { type: Date, required: true, default: Date.now() },
	isApproved: { type: String, required: true, default: "pending" },
	isPaid: { type: Boolean, required: true, default: false },
});

const Publication = mongoose.model("publications", PublicationSchema);

module.exports = Publication
