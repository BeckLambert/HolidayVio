// var express = require("express");

// var holiday = require("../models/holiday.js");


// var router = express.Router();

// // router.get("/", function (req, res) {
// // //     holidays.
// //     res.render("index", {
// //         name: "zach"
// //     });
// // });


// var express = require("express");


// router.get("/", function (req, res) {
//     quiz.selectAll(function (data) {
//         var hbsObject = {
//             quiz: data
//         };
//         console.log(hbsObject);
//         res.render("home", hbsObject);
//     });
// });

// router.post("/api/quiz", function (req, res) {

//     holiday.create(
//         ["question","userAns", "created_at"],
//         [req.body.question, req.body.userAns, req.body.created_at], function (result) {
//             res.json({ id: result.insertId });
//         });
//     });


//     router.put("/api/quiz/:id", function (req, res) {
//         var condition = "id = " + req.params.id;
//         console.log("condition", condition);

//         holiday.update({
//             userAns: req.body.userAns
//         }, condition, function (result) {
//             if (result.changedRows === 0) {
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }

//         });
// });

        
// module.exports = router;




