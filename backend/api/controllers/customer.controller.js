const Customer = require("../models/customer.model");
const { hashPassword } = require("../helpers/passwordHash");
const bcrypt = require("bcryptjs");

const getAllCustomers = async (req, res) => {
	try {
		const allcustomers = await Customer.find();
		return res.status(200).json({ customers: allcustomers });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send();
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
		const { id, firstName, lastName, username, email, contactNumber, address } =
			await Customer.findById(request.userId);
		const customerDetails = { id, firstName, lastName, username, email, contactNumber, address };
		response.status(200).json({ customer: customerDetails });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const deleteCustomer = async (req, res) => {
	if (req.params.id) {
		try {
			await Customer.findByIdAndDelete(req.params.id);
			return res.status(200).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}
};

const getUserprofileDetails = async (request, response) => {
	try {
		const UserProfileDetails = await Customer.findById(req.params.userId);
		response.status(200).json({ customer: UserProfileDetails });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}

};

const updateUserProfile = async (req, res) => {
	//*request params validation
	if (req.params.id) {
		//*request body validation
		if (req.body) {
			const { firstName, lastName, username, password, email, contactNumber, address } = req.body;
			const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
			//*user update input validation
			if (!firstName || !lastName|| !username || !password || !email || !contactNumber || !addresss) {
				return res.status(400).json({ message: "Please fill all fields" });
			}
			if (!email.match(pattern)) {
				return res
					.status(400)
					.json({ message: "Please enter a valid email address" });
			}

			if (password.length < 6) {
				return res
					.status(400)
					.json({ message: "Password should be at least 6 characters long" });
			}

			if (contactNumber.length < 10) {
				return res
					.status(400)
					.json({ message: "Please enter a valid phone number" });
			}

			try {
				// * update user package
				await Package.findByIdAndUpdate(req.params.id, {
				firstName,
				lastName,
				username,
				email,
				password,
				contactNumber,
				addresss,
				});

				// * sending as updated
				return res.status(201).send(true);
			} catch (err) {
				console.error(err.message);
				return res.status(500).send();
			}
		}

		return res.status(400).send();
	}
};

module.exports = { getAllCustomers, saveCustomer, getCustomerDetails, deleteCustomer, getUserprofileDetails, updateUserProfile };
