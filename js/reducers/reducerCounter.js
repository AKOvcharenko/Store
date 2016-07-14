function changeState(state, sku, summand){
    debugger;
    var value;
    var changedCounter;
    var result = state.slice();

    result = result.filter(function(el){if(el.sku === sku){changedCounter = el; return false;} return true;});
    value = changedCounter.value + summand;
    if((value > 1 && summand > 0) || (value < 99 && summand < 0)){
        changedCounter.value = value;
        changedCounter.minusDisabled = value > 1 ? '' : 'disabled';
        changedCounter.plusDisabled = value < 98 ? '' : 'disabled';
    }
    result.push(changedCounter);

    return result;
}

function initialState(data){
    var result =  data.map(function(item){
        return {
            sku: item.sku,
            value: 1,
            minusDisabled: 'disabled',
            plusDisabled: ''
        }
    });
    return result;
}

function counterState(state, action){
    state = state || [];
    //{value: 1, minusDisable: 'disabled', plusDisabled: ''};
    switch (action.type) {
        case "SetInitialCounterState":
            return initialState(action.items);
        case "CounterIncrement":
            return changeState(state, action.sku, 1);
        case "CounterDecrement":
            return changeState(state, action.sku, -1);
        default:
            return state;
    }
}

module.exports = counterState;