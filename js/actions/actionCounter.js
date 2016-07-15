function counterIncrement(sku){
    return {
        type: "CounterIncrement",
        sku: sku
    }
}

function counterDecrement(sku){
    return {
        type: "CounterDecrement",
        sku: sku
    }
}

function setPLPCounter(){
    return {
        type: "SetInitialPLPCounterState",
        items: require('./../../data.json')
    }
}

function setBPCounter(addedList){
    return {
        type: "SetInitialBPCounterState",
        items: addedList
    }
}


module.exports = {
    counterDecrement: counterDecrement,
    counterIncrement: counterIncrement,
    setPLPCounter: setPLPCounter,
    setBPCounter: setBPCounter
};