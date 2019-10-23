var express = require("express");

var holiday = require("../models/holiday.js");


var router = express.Router();

// router.get("/", function (req, res) {
// //     holidays.
//     res.render("index", {
//         name: "zach"
//     });
// });


var express = require("express");


router.get("/", function (req, res) {
    holiday.selectAll(function (data) {
        var hbsObject = {
            quiz: data
        };
        console.log(hbsObject);
        res.render("home", hbsObject);
    });
});

router.post("/api/halloween", function (req, res) {

    holiday.create(
        ["questions", "choice1", "choice2", "choice3", "choice4", "userAns"],
        [req.body.questions, req.body.choice1, req.body.choice2, req.body.choice3, req.body.choice4, req.body.userAns], function (result) {
            res.json({ id: result.insertId });
        });
    });


    router.put("/api/halloween/:id", function (req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        holiday.update({
            userAns: req.body.userAns
        }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }

        });
});
        
module.exports = router;
