var express = require("express");

var holidays = require("..models/holiday.js");

var router = express.Router();

// router.get("/", function (req, res) {
// //     holidays.
//     res.render("index", {
//         name: "zach"
//     });
// });


var express = require("express");


var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    halloween.selectAll(function (data) {
        var hbsObject = {
            quiz: data
        };
        console.log(hbsObject);
        res.render("home", hbsObject);
    });
});

router.post("/api/halloween", function (req, res) {
    halloween.create(
        ["questions"], [req.body.burger_name, req.body.devoured], function (result) {
            res.json({ id: result.inserId });
        });


    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burgers.updateOne({
            devoured: req.body.devoured
        }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    //Now, let's delete a burger from the menu
    router.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burgers.deleteOne(condition, function (result) {
            if (result.changedRows === 0) {

                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
        );
    });

});

module.exports = router;