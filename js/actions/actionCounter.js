function counterIncrement(itemId, value){
    return {
        type: "CounterIncrement",
        itemId: itemId,
        value: value,
        minusState: minusState,
        plusState: plusState,
        increment: true
    }
}

function counterDecrement(itemId, value){
    return {
        type: "CounterDecrement",
        itemId: itemId,
        value: value,
        minusState: minusState,
        plusState: plusState,
        increment: false
    }
}

module_exports = {
    counterDecrement: counterDecrement,
    counterIncrement: counterIncrement
};