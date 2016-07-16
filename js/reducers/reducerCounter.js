function changeState(state, sku, summand, isBasket){
    var value;
    var changedCounter;
    var result = state.slice();

    result = result.filter(function(el){if(el.sku === sku){changedCounter = el; return false;} return true;});
    value = changedCounter.value;
    if((value < 99 && summand > 0) || (value > 0 && summand < 0) || summand === 0){
        value = summand ? changedCounter.value + summand : 0;
        changedCounter.value = value;
        changedCounter.minusDisabled = value === 0 ? 'disabled' : '';
        changedCounter.plusDisabled = value === 99 ? 'disabled' : '';

        //for basket counters only
        if(value === 1 && isBasket){
            changedCounter.minusDisabled = 'disabled'
        }

    }
    result.push(changedCounter);
    result = result.sort(function(first, second){return first.sku > second.sku ? 1 : -1});

    return result;
}

function initialPLPState(state, data){
    return data.map(function(item){
        return {
            sku: item.sku,
            value: 0,
            minusDisabled: 'disabled',
            plusDisabled: ''
        }
    });
}

function initialBPState(state, data){
    var result =  state.slice();
    data.forEach(function(el){
        var matched;
        result = result.filter(function(instance){
            if(instance.sku === el.sku){
                matched = instance;
                return false;
            }
            return true;
        });
        matched.value = el.value;
        matched.minusDisabled = el.value > 1 ? '' : 'disabled';
        matched.plusDisabled = el.value < 99 ? '' : 'disabled';
        result.push(matched);
    });
    return result;
}

function counterState(state, action){
    state = state || [];
    switch (action.type) {
        case "SetInitialPLPCounterState":
            return initialPLPState(state, action.items);
        case "SetInitialBPCounterState":
            return initialBPState(state, action.items);
        case "CounterIncrement":
            return changeState(state, action.sku, 1, action.isBasket);
        case "CounterDecrement":
            return changeState(state, action.sku, -1, action.isBasket);
        case "CounterReset":
            return changeState(state, action.sku, 0);
        default:
            return state;
    }
}

module.exports = counterState;