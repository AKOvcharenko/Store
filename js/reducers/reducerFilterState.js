function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function storeFiltersState(state, filterType, value){
    var result = clone(state);
    
    result[filterType] = value;

    return result;
}

function resetFilters(){
    return {search: '', filterBrand: '', filterCat:'', sort:''};
}

function filterState(state, action){
    state = state || {search: '', filterBrand: '', filterCat:'', sort:''};
    switch (action.type) {
        case "StoreFilterState":
            return storeFiltersState(state, action.filterType, action.value);
        case "ResetFilters":
            return resetFilters();
        default:
            return state;
    }
}

module.exports = filterState;