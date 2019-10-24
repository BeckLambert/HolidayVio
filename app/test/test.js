"use strict";

var expect = require("chai").expect;
var request = require("request");
var QuizFlow = require('..//models/newyears.js');


describe("QuizFlow", function() {
    it("getResults() should return error if no items are passed in", function () {
        var quizResult = new  QuizFlow([]);
        expect(quizResult.getResults()).to.equal(error);
    });
})

function QuizFlow() {
    QuizFlow.prototype.getResults = function() {
        return 0
    };

    module.exports = QuizFlow;
}

it("Halloween page", function(done) {
request("http://localhost:3000", function (err, response, body) {
    expect(body).to.equal("Welcome");
    done();
});
});


describe("")
//Functionality
// IF Quiz input field check for correct answer

//IF VARCHAR = ""

//If Calender API 
//







