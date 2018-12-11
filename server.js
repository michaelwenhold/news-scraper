let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");

let axios = require("axios");
let cheerio = require("cheerio");

// Require all models
let db = require("./models");

let PORT = process.env.PORT || 3000;

// Initialize Express
let app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytimesfootball";
mongoose.connect(MONGODB_URI);
