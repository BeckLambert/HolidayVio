var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/home.html"));
  });

  app.get("/halloween", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/halloween.html"));
  });

  app.get("/thanksgiving", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/thanksgiving.html"));
  });

  app.get("/christmas", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/christmas.html"));
  });

  app.get("/newyears", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/newyears.html"));
  });

  // blog route loads blog.html
  app.get("/valentines", function(req, res) {
    res.sendFile(path.join(__dirname, "/html/valentines.html"));
  });

};