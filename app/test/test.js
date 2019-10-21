"use strict";

var expect = require("chai").expect;
var titleize = require("../titleize");
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



