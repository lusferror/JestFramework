
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(currency){
    let dy=currency.JPY/oneEuroIs.USD;
    return dy;
}

function fromEuroToDollar (currency){
    return ed=currency.USD;
}

function fromYanToPound(currency){
    return currency.GBP/currency.JPY;
}

// module.exports =  fromDollarToYen;
// module.exports = fromEuroToDollar;

