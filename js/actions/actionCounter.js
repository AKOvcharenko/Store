function counterReset(sku){
    return {
        type: "CounterReset",
        sku: sku
    }
}

function counterIncrement(sku, isBasket){
    return {
        type: "CounterIncrement",
        sku: sku,
        isBasket: !!isBasket
    }
}

function counterDecrement(sku, isBasket){
    return {
        type: "CounterDecrement",
        sku: sku,
        isBasket: !!isBasket
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
    setBPCounter: setBPCounter,
    counterReset: counterReset
};