var React = require('react');
var store = require('./../store/store.js');
var actionFilterState = require('./../actions/actionFilterState.js');
var actionModifyList = require('./../actions/actionModifyList.js');


var Select = React.createClass({
    eachOption: function(elem, index){
        return (<option key={index}>{elem}</option>);
    },
    changeHandler: function(event) {
        var select = event.target;
        store.dispatch(actionFilterState(select.id, select.value));
        store.dispatch(actionModifyList(store.getState().filterState));
    },
    render: function(){
        return (<div className="select">
                    <select onChange={this.changeHandler} id={this.props.id} className="form-control">
                        {this.props.options.map(this.eachOption)}
                    </select>
                </div>)
    }
});


module.exports = Select;
