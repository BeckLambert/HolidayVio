"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

function(displayQuestion){
  connection.query("SELECT question FROM quiz", function(err, res){
    if (err) throw err;
      Quiz.question.forEach(
        (question) => {
          console.log(question.dataValues);
          console.log(choice1.dataValues);
          console.log(choice2.dataValues);
          console.log(choice3.dataValues);
          console.log(choice4.dataValues);
        }
      )
  })
}

//forEach question
//console question and answer set(choice1-4)

// Quiz.update(
//   (userAns) => {
//     console.log(userAns.dataValues);
//   }
// )

// Model.findAll({
//   attributes: { exclude: ['userAns'] }
// }).then(function(result){
//   console.log(attributes);
// })






db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;