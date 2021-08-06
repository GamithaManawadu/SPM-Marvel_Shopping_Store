const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const attendeeRoutes = require("./api/routes/attendee.routes");
const researcherRoutes = require("./api/routes/researcher.routes");
const presenterRoutes = require("./api/routes/presenter.routes");
const publicationRoutes = require("./api/routes/publication.routes");
const workshopRoutes = require("./api/routes/workshop.routes");
const blogRoutes = require("./api/routes/blog.routes");
const commonRoutes = require("./api/routes/common.routes");
const adminRoutes = require("./api/routes/admin.routes");
const paymentRoutes = require("./api/routes/payment.routes");
const conferenceRoutes = require("./api/routes/conference.routes");
const downloadRoutes = require("./api/routes/download.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/attendee", attendeeRoutes);
app.use("/researcher", researcherRoutes);
app.use("/presenter", presenterRoutes);
app.use("/publication", publicationRoutes);
app.use("/workshop", workshopRoutes);
app.use("/blog", blogRoutes);
app.use("/auth", commonRoutes);
app.use("/admin", adminRoutes);
app.use("/payment", paymentRoutes);
app.use("/conference", conferenceRoutes);
app.use("/download", downloadRoutes);

const PORT = process.env.PORT || 3000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		app.listen(PORT, () =>
			console.log(`mongodb synced and listening on port ${PORT}`)
		);
	})
	.catch((error) => {
		console.log(error.message);
	});

app.get("/", (request, response) => {
	response.send(
		"International Conference on Application Frameworks | ICAF API"
	);
});
