function filterApplayed(filterType, value){
    return {
        type: "StoreFilterState",
        filterType: filterType,
        value: value
    }
}

module.exports = filterApplayed;