var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
// var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var db = require("./app/models");


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
  