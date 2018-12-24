let statement = require('../app/statement');

let plays = {
    "hamlet": { "name": "Hamlet", "type": "tragedy" },
    "as-like": { "name": "As You Like It", "type": "comedy" },
    "othello": { "name": "Othello", "type": "tragedy" }
}

let invoices =
{
    "customer": "BigCo",
    "performances": [
        {
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "as-like",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
}


describe("A statement", function () {

    it("should calculate amount owed and earned points", function () {
        let expectedStatement = statement(invoices, plays)
        expect(expectedStatement).toBe(true);
    });

});