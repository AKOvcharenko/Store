var Redux = require('redux');
var filterState = require('./../reducers/reducerFilterState.js');
var modifydList = require('./../reducers/reducerModifyList.js');
var changeCounterState = require('./../reducers/reducerCounter.js');

var reducers = Redux.combineReducers({
    filterState: filterState,
    modifydList: modifydList,
    changeCounterState: changeCounterState
});

var store = Redux.createStore(reducers);

module.exports = store;