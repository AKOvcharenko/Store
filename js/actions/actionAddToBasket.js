function addToBasket(sku, number){
    return {
        type: "AddToBasket",
        sku: sku,
        number: number
    }
}

function directModify(sku, number){
    return {
        type: "DirectCartModify",
        sku: sku,
        number: number
    }
}

function removeItem(sku){
    return {
        type: "RemoveItem",
        sku: sku
    }
}

module.exports = {
    addToBasket: addToBasket,
    directModify: directModify,
    removeItem: removeItem
};