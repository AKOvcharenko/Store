var React = require('react');
var actionFilterState = require('./../actions/actionFilterState.js');
var actionModifyList = require('./../actions/actionModifyList.js');
var store = require('./../store/store.js');

var Search = React.createClass({
    makeASearch: function(event){
        var value = event.target.value;
        store.dispatch(actionFilterState('search', value));
        store.dispatch(actionModifyList(store.getState().filterState));
    },
    render: function(){
        return (<div className="search">
                    <div className="form-group">
                        <label htmlFor="search-input">Search a product</label>
                        <input onChange={this.makeASearch} type="text" id="search-input" className="form-control" placeholder="Search a product"/>
                    </div>
                </div>)
    }
});

module.exports = Search;