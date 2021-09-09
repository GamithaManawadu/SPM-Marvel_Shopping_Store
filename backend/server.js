const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const customerRoutes = require("./api/routes/customer.routes");
const commonRoutes = require("./api/routes/common.routes");
const adminRoutes = require("./api/routes/admin.routes");
const feedbackRoutes = require("./api/routes/feedback.routes");
const productRoutes = require("./api/routes/product");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use("/customer", customerRoutes);
app.use("/auth", commonRoutes);
app.use("/admin", adminRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 3000;
dotenv.config();

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
  response.send("MARVEL FASHION");
});
