var data = require('./../../data.json');

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function determineFullItemParams(sku, number){
    var itemInfo = data.filter(function(el){if(el.sku === sku){addedItem = el; return true;} return false;})[0];
    var result = clone(itemInfo);
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
    alreadyInBasket = addedItem ? parseInt(addedItem.value) : 0;
    alreadyInBasket += number;
    result.push(determineFullItemParams(sku, alreadyInBasket));
    result = result.sort(function(first, second){return first.sku > second.sku ? 1 : -1});
    return result;
}

function addToBasket(state, action){
    state = state || [];
    switch (action.type) {
        case "AddToBasket":
            return modifyCartState(state, action.sku, action.number);
        case "DirectCartModify":
            return modifyCartState(state, action.sku, action.number);
        default:
            return state;
    }
}

module.exports = addToBasket;
