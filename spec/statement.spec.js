let statement = require('../app/statement');

describe("A statement ", function () {

    it("should calculate amount owed and earned points", function () {
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

        let calculatedStatement = statement(invoices, plays)
        expect(calculatedStatement).toBe('Statement for BigCo\n' + 
        '  Hamlet: $650.00 (55 seats)\n' +
        '  As You Like It: $580.00 (35 seats)\n' + 
        '  Othello: $500.00 (40 seats)\n' + 
        'Amount owed is $1,730.00\n'+
        'You earned 47 credits\n');
    });

    it("should throw an error when receives a unknown play type", function () {
        let invoices =
        {
            "customer": "ErrorCompany",
            "performances": [
                {
                    "playID": "terror play",
                    "audience": 666
                }
            ]
        }
        let terrorPlays = {"terror play": {"name": "terror play", "type": "terror"}}

        expect(function() {statement(invoices, terrorPlays);}).toThrowError('unknown type: terror');
    });

});