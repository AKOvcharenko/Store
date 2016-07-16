function filterApplayed(filterType, value){
    return {
        type: "StoreFilterState",
        filterType: filterType,
        value: value
    }
}

function resetFilters(){
    return {
        type: "ResetFilters"
    }
}

module.exports = {
    filterApplayed: filterApplayed,
    resetFilters: resetFilters
};