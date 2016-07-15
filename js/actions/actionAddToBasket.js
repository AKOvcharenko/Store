function addToBasket(sku, number){
    return {
        type: "AddToBasket",
        sku: sku,
        number: number
    }
}

module.exports = addToBasket;