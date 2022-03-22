var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert

describe('sample test cases for DevSecOps team', () => {

    it("passing test case", () => {
        assert(true);
    })

    it("failing test case", () => {
        throw new Error("the test failed");
    })
})