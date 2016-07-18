var data = require('./../../data.json');

var modifyMethods = {
    search: function (value, item) {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    },
    filterCat: function (value, item) {
        if (!value || value === 'Select a category') return true;
        return item.category === value;
    },
    filterBrand: function (value, item) {
        if (!value || value === 'Select a brand') return true;
        return item.brand === value;
    },
    sort: function (type, first, second) {
        if (!type || type === 'Select a method') return;
        var comparingKey = type === 'Alphabetically' ? 'name' : 'brand';
        return first[comparingKey] > second[comparingKey] ? 1 : -1;
    },
    pagination: function(value, item, index, array){
        var perPage = value.perPage;
        var activePage = value.activePage;
        return (index < (perPage + perPage*activePage) && index >= (perPage*activePage));
    }
};

function modifying(state, modifyCondition) {
    var modifayed = data.slice();
    for (var key in modifyCondition){
        modifayed = key === 'sort' ? modifayed.sort(modifyMethods[key].bind(this, modifyCondition[key])) : modifayed.filter(modifyMethods[key].bind(this, modifyCondition[key]));
    }
    return modifayed;
}

function modify(state, action) {
    state = state || data;
    switch (action.type) {
        case "ModifyList":
            return modifying(state, action.modifyCondition);
        default:
            return state;
    }
}

module.exports = modify;
