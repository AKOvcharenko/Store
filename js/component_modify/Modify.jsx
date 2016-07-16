var React = require('react');
var Search = require('./Search.jsx');
var Filter = require('./Filter.jsx');
var Sort = require('./Sort.jsx');
var actionFilter = require('./../actions/actionFilterState.js');
var actionModifyList = require('./../actions/actionModifyList.js');
var store = require('./../store/store.js');

var Modify = React.createClass({
    componentWillMount: function(){
        store.dispatch(actionFilter.resetFilters());
        store.dispatch(actionModifyList(this.props.filterState));
    },
    changeHandler: function(type, value){
        store.dispatch(actionFilter(type, value));
        store.dispatch(actionModifyList(this.props.filterState));
    },
    render: function(){
        return (<div className="modify col-sm-2">
                    <Search changeHandler={this.changeHandler}/>
                    <Filter changeHandler={this.changeHandler}
                            id="filterCat"
                            type="category"/>
                    <Filter changeHandler={this.changeHandler}
                            id="filterBrand"
                            type="brand"/>
                    <Sort changeHandler={this.changeHandler}
                          id="sort"/>
                </div>)
    }
});

module.exports = Modify;