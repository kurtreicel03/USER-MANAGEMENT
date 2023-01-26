const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
// JSON PARSER
app.use(bodyParser.json());

// ROUTES
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/user", userRoutes);
module.exports = app;
