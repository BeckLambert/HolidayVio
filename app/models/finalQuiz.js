var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Holiday = sequelize.define("holiday", {
  question: Sequelize.STRING,
  choice1: Sequelize.STRING,
  choice2: Sequelize.STRING,
  choice3: Sequelize.STRING,
  choice4: Sequelize.STRING,
  userAns: Sequelize.STRING
});

// Syncs with DB
Holiday.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Holiday;
