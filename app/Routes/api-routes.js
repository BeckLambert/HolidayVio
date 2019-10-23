var Holiday = require("../models/finalQuiz.js");


// Routes
// =============================================================
module.exports = function (app) {

    // Get all chirps
    app.get("/api/all", function (req, res) {

        // Finding all Chirps, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Holiday.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });

    });

    // Add a chirp
    app.post("/api/new", function (req, res) {

        console.log("Holiday Data:");
        console.log(req.body);

        Holiday.create({
            question: req.body.question,
            choice1: req.body.choice1,
            choice2: req.body.choice2,
            choice3: req.body.choice3,
            choice4: req.body.choice4,
            userAns: req.body.userAns
        }).then(function (results) {
            // `results` here would be the newly created chirp
            res.end();
        });

    });

};