const mongoose = require("mongoose");

const ResearcherSchema = new mongoose.Schema({
	firstName: { type: String, required: true, trim: true },
	lastName: { type: String, required: true, trim: true },
	username: { type: String, required: true, trim: true, unique: true },
	password: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true, unique: true },
	contactNumber: { type: String, required: true, trim: true },
	university: { type: String, required: true, trim: true },
	department: { type: String, required: true, trim: true },
});

const Researcher = mongoose.model("researchers", ResearcherSchema);

module.exports = Researcher;
