const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
	firstName: { type: String, required: true, trim: true },
	lastName: { type: String, required: true, trim: true },
	username: { type: String, required: true, trim: true, unique: true },
	password: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true, unique: true },
	contactNumber: { type: String, required: true, trim: true },
	address: { type: String, required: true, trim: true },
	
});

const Customer = mongoose.model("customers", CustomerSchema);

module.exports = Customer;