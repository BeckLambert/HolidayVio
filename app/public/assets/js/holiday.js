var orm = require("../config/orm.js")

var holiday = {

    selectAll: function (cb) {
        orm.selectAll("holiday", function(res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("holiday", cols, vals, function (res) {
            cb(res);
        });
    }, 


    update: function (objColVals, condition, cb) {
        orm.update("holiday", objColVals, condition, function (res) {
            cb(res)
        });
    },
};

module.exports = holiday;
    
