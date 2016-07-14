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

function setCounter(){
    return {
        type: "SetInitialCounterState",
        items: require('./../../data.json')
    }
}


module.exports = {
    counterDecrement: counterDecrement,
    counterIncrement: counterIncrement,
    setCounter: setCounter
};