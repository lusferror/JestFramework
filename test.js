const {fromDollarToYen} = require("./app.js");
const {fromEuroToDollar}= require("./app.js");
const {fromYanToPound}=require('./app.js')

// start your first test
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test('El calculo de 1000 Dolares deberia ser 106583.33333333334', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(1000);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(106583.33333333334);
});

test('El calculo de 1000 Euros deberia ser 106583.33333333334', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromEuroToDollar(1000);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(1200);
});

test('El calculo de 1000 Yenes deberia ser 6.254886630179828', () => {
    //inside the test we call our sum function with 2 numbers
    let total = fromYanToPound(1000);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(6.254886630179828);
});