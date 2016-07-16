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

module.exports = {
    addToBasket: addToBasket,
    directModify: directModify
};