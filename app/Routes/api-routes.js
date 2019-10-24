var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {


    // GET route for getting all of the posts
    app.get("/api/quiz", function (req, res) {
        db.Quiz.findAll({})
            .then(function (data) {
                res.json(data);
            });
    });


    // POST route for saving a new post
    app.post("/api/quiz", function (req, res) {
        console.log(req.body);
        db.Quiz.create({
            question: req.body.question,
            userAns: req.body.userAns,
            created_at: req.body.created_at,
        })
            .then(function (data) {
                res.json(data);
            });
    });
}
