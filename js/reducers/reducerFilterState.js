function storeFiltersState(state, filterType, value){
    var result = Object.assign({}, state);
    
    result[filterType] = value;

    return result;
}

function filterState(state, action){
    state = state || {search: '', filterBrand: '', filterCat:'', sort:''};
    switch (action.type) {
        case "StoreFilterState":
            return storeFiltersState(state, action.filterType, action.value);
        default:
            return state;
    }
}

module.exports = filterState;