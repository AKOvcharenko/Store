function modifyCartState(state, sku, number){
    var addedItem;
    var alreadyInBasket;
    var result = state.slice();

    result = result.filter(function(el){if(el.sku === sku){addedItem = el; return false;} return true;});
    addedItem = addedItem ? addedItem : {};
    alreadyInBasket = addedItem[sku] || 0;
    addedItem[sku] = alreadyInBasket + number;
    result.push(addedItem);

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
