const mongoose = require("mongoose");

const DownloadSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
});

const Download = mongoose.model("downloads", DownloadSchema);

module.exports = Download;
