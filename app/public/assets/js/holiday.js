var orm = require("../config/orm.js")

var holiday = {

    selectAll: function (cb) {
        orm.selectAll("halloween", function(res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("halloween", cols, vals, function (res) {
            cb(res);
        });
    }, 


    update: function (objColVals, condition, cb) {
        orm.update("halloween", objColVals, condition, function (res) {
            cb(res)
        });
    },
};

module.exports = holiday;
=======
    // update: function (objColVals);
}

