const Customer = require("../models/customer.model");


const Moderator = require("../models/moderator.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (request, response) => {
	let authUser;

	if (request.body) {
		if (request.body.userType === "customer") {
			userType = "customer";
			authUser = await Customer.findOne({
				username: request.body.username,
			});
		
		} else if  (request.body.userType === "") {
			if (request.body.username.includes("admin")) {
				userType = "admin";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "admin",
				});
			} else if (request.body.username.includes("delivery")) {
				userType = "delivery";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "delivery",
				});
			} else if (request.body.username.includes("store")) {
				userType = "store";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "store",
				});
			} else if (authUser) {
				return response
					.status(404)
					.json({ message: "Username or password invalid" });
			}
		} else if (!authUser) {
			return response
				.status(404)
				.json({ message: "Username or password invalid" });
		}

		let authPassword;

		if (authUser !== null) {
			authPassword = await bcrypt.compare(
				request.body.password,
				authUser.password
			);
		}

		if (!authPassword) {
			return response
				.status(404)
				.json({ message: "Username or password invalid" });
		}

		const authToken = jwt.sign(
			{ id: authUser.id, userType: userType },
			process.env.JWT_SECRET
		);
		response
			.status(200)
			.json({ auth: true, userType: userType, authToken, id: authUser.id });
	}
};

module.exports = { loginUser };