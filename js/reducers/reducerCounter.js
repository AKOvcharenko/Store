function changeState(state, itemId, value, minusState, plusState, increment){
    var result = Object.assign({}, state);

    if((value > 1 && !increment) || (value < 99 && !increment)){
        increment ? value += 1 : value -= 1;
        result.value = value;
        result.minusState = value > 1 ? '' : 'disabled';
        result.plusState = value < 99 ? '' : 'disabled';
    }

    return result;
}

function changeCounterState(state, action){
    debugger
    state = state || {id:'', value: 1, minusDisable: 'disabled', plusDisabled: '', increment: false};
    switch (action.type) {
        case "CounterIncrement":
            return changeState(state, action.itemId, action.value, action.minusState, action.plusState, action.increment);
        case "CounterDecrement":
            return changeState(state, action.itemId, action.value, action.minusState, action.plusState, action.increment);
        default:
            return state;
    }
}

module.exports = changeCounterState;