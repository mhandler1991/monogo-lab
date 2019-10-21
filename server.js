// *****************************
// Require Packages
// *****************************

// Server

var express = require("express");

// db

var logger = require("morgan");
var mongoose = require("mongoose");

// Scraping

var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// *****************************
// Initialize Express
// *****************************

var app = express();

// *****************************
// Configure middleware
// *****************************

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", {
    useNewUrlParser: true
});

// *****************************
//  ROUTES
// *****************************



// SCRAPE THE WEBSITE
// *****************************
app.get("/scrape", function (req, res) {

    // First, we grab the body of the html with axios

    axios.get("https://www.npr.org/sections/news/").then(function (response) {

        // Log Response
        console.log("Response:");
        console.log(response);

        // Log Response.Data
        console.log("Response Data:");
        console.log(response.data);

        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("article h2").each(function (i, element) {
            // Save an empty result object
            var result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");


            // Create a new Article using the `result` object built from scraping

            db.Article.create(result)
                .then(function (dbArticle) {
                    // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    // If an error occurred, log it
                    console.log(err);
                });
        });

        // Send a message to the client
        res.send("Scrape Complete");
    });
});

// Route for getting all Articles from the db
// *****************************



// Route for getting an Article by Id
// *****************************


// Route for Updating an Articles Note
// *****************************





// *****************************
// START SERVER
// *****************************

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });