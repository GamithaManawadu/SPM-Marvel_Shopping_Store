const Customer = require("../models/customer.model");
const { hashPassword } = require("../helpers/passwordHash");

const getAllCustomers = async (request, response) => {
	try {
		const allCustomers = await Customer.find();
		response.status(200).json({ customers: allCustomers });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveCustomer = async (request, response) => {
	if (request.body) {
		request.body.password = await hashPassword(request.body.password);
		const newCustomer = new Customer(request.body);
		try {
			await newCustomer.save();
			response.status(201).json({ id: newCustomer.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

const getCustomerDetails = async (request, response) => {
	try {
		const { id, firstName, lastName, email, username } =
			await Customer.findById(request.userId);
		const customerDetails = { id, firstName, lastName, email, username };
		response.status(200).json({ buyer: customerDetails });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

module.exports = { getAllCustomers, saveCustomer, getCustomerDetails };
