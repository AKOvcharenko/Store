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


module.exports = {
    counterDecrement: counterDecrement,
    counterIncrement: counterIncrement,
    setPLPCounter: setPLPCounter
};