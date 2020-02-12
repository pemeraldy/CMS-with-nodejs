const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();
const { mongoDbUrl } = require("./config/configuration");
const { PORT } = require("./config/configuration");

/* Connect to DB */
mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true })
  .then(response => {
    console.log("connected to db successfully");
  })
  .catch(err => {
    console.log("DB conn failed", err);
  });

/* Configure middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/* setup view engine */
app.engine("handlebars", hbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

/* Routes */
const defaultRouter = require("./routes/defaultRouter");
app.use("/", defaultRouter);

// Server started
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
