
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    let yen=dollar*(oneEuroIs.JPY/oneEuroIs.USD);
    return yen;
}

function fromEuroToDollar (euro){
    let dollar = euro*oneEuroIs.USD
    return dollar;
}

function fromYanToPound(yan){
    let pound=yan*(oneEuroIs.GBP/oneEuroIs.JPY)
    return pound;
}

module.exports =  {fromDollarToYen,fromEuroToDollar,fromYanToPound};
// module.exports = fromEuroToDollar;

