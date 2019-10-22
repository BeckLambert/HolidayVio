var orm = require("../config/orm.js")

var halloween = {

    selectAll: function (cb) {
        orm.selectAll("halloween", function(res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("halloween", cold, vals, function (res) {
            cb(res);
        });
    }, 

    update: function (objColVals, )
}