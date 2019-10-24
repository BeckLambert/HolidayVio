module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userAns: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Quiz;
};
  