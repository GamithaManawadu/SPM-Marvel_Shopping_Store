const Attendee = require("../models/attendee.model");
const Presenter = require("../models/presenter.model");
const Researcher = require("../models/researcher.model");
const Moderator = require("../models/moderator.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (request, response) => {
	let authUser;

	if (request.body) {
		if (request.body.userType === "researcher") {
			userType = "researcher";
			authUser = await Researcher.findOne({
				username: request.body.username,
			});
		} else if (request.body.userType === "presenter") {
			userType = "presenter";
			authUser = await Presenter.findOne({
				username: request.body.username,
			});
		} else if (request.body.userType === "attendee") {
			userType = "attendee";
			authUser = await Attendee.findOne({
				username: request.body.username,
			});
		} else if (request.body.userType === "") {
			if (request.body.username.includes("admin")) {
				userType = "admin";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "admin",
				});
			} else if (request.body.username.includes("editor")) {
				userType = "editor";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "editor",
				});
			} else if (request.body.username.includes("reviewer")) {
				userType = "reviewer";
				authUser = await Moderator.findOne({
					username: request.body.username,
					type: "reviewer",
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
