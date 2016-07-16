function changeState(state, sku, summand){
    var value;
    var changedCounter;
    var result = state.slice();

    result = result.filter(function(el){if(el.sku === sku){changedCounter = el; return false;} return true;});
    value = changedCounter.value;
    if((value < 99 && summand > 0) || (value > 1 && summand < 0)){
        value = changedCounter.value + summand;
        changedCounter.value = value;
        changedCounter.minusDisabled = value === 1 ? 'disabled' : '';
        changedCounter.plusDisabled = value === 99 ? 'disabled' : '';
    }
    result.push(changedCounter);
    result = result.sort(function(first, second){return first.sku > second.sku ? 1 : -1});

    return result;
}

function initialPLPState(data){
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

function initialBPState(data){
    var result =  data.slice();
    return result;
}

function counterState(state, action){
    state = state || [];
    switch (action.type) {
        case "SetInitialPLPCounterState":
            return initialPLPState(action.items);
        case "SetInitialBPCounterState":
            return initialBPState(state, action.items);
        case "CounterIncrement":
            return changeState(state, action.sku, 1);
        case "CounterDecrement":
            return changeState(state, action.sku, -1);
        default:
            return state;
    }
}

module.exports = counterState;