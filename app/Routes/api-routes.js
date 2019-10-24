var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    // Get all chirps
    app.get("/api/quiz", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Quiz.findAll({}).then(function (data) {
            // We have access to the todos as an argument inside of the callback function
            res.json(data);
        });
    });

//     // Finding all Chirps, and then returning them to the user as JSON.
//     // Sequelize queries are asynchronous, which helps with perceived speed.
//     // If we want something to be guaranteed to happen after the query, we'll use
//     // the .then function




//     // Add a chirp
//     app.post("/api/quiz", function (req, res) {

//         console.log("Quiz Data:");
//         console.log(req.body);

//         Quiz.create({
//             question: req.body.question,
//             userAns: req.body.userAns
//         }).then(function (results) {
//             // `results` here would be the newly created chirp
//             res.end();
//         });

//     });

// };

// var db = require("../models");

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

    // DELETE route for deleting posts
    //   app.delete("/api/posts/:id", function(req, res) {
    //     db.Post.destroy({
    //       where: {
    //         id: req.params.id
    //       }
    //     })
    //       .then(function(dbPost) {
    //         res.json(dbPost);
    //       });
    //   });

    //   // PUT route for updating posts
    //   app.put("/api/posts", function(req, res) {
    //     db.Post.update(req.body,
    //       {
    //         where: {
    //           id: req.body.id
    //         }
    //       })
    //       .then(function(dbPost) {
    //         res.json(dbPost);
    //       });
    //   });
}};