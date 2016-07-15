var data = require('./../../data.json');

function determineFullItemParams(sku, number){
    var itemInfo = data.filter(function(el){if(el.sku === sku){addedItem = el; return true;} return false;})[0];
    var result = Object.assign({}, itemInfo);
    result.value = number;
    result.minusDisabled = '';
    result.plusDisabled = '';
    return result;
}

function modifyCartState(state, sku, number){
    var addedItem;
    var alreadyInBasket;
    var result = state.slice();

    result = result.filter(function(el){if(el.sku === sku){addedItem = el; return false;} return true;});
    alreadyInBasket = addedItem ? addedItem.value : 0;
    alreadyInBasket += number;
    result.push(determineFullItemParams(sku, number));
debugger;
    return result;
}

function addToBasket(state, action){
    state = state || [];
    switch (action.type) {
        case "AddToBasket":
            return modifyCartState(state, action.sku, action.number);
        default:
            return state;
    }
}

module.exports = addToBasket;
