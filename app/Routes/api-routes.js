var Holiday = require("../models/finalQuiz.js");


// Routes
// =============================================================
module.exports = function (app) {

    // Get all chirps
    app.get("/api/quiz", function (req, res) {
        app.get("/api/todos", function(req, res) {
            // findAll returns all entries for a table when used with no options
            db.Holiday.findAll({}).then(function(dbTodo) {
              // We have access to the todos as an argument inside of the callback function
              res.json(dbTodo);
            });
          });

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
            userAns: req.body.userAns
        }).then(function (results) {
            // `results` here would be the newly created chirp
            res.end();
        });

    });

};

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/quiz/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};