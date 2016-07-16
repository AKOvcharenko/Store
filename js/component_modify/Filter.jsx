var React = require('react');
var fullList = require('./../../data.json');
var Select = require('./../components_common/Select.jsx');

var Filter = React.createClass({
    getDefaultProps: function(){
        return {
            fullItemsList: fullList
        }
    },
    getOptions: function(){
        var type = this.props.type;
        var firstOption = 'Select a ' + type;
        var options = [firstOption];
        var items = this.props.fullItemsList;
        items.forEach(function(item){options.push(item[type])});
        options = options.filter(function(option, index){return options.indexOf(option) === index});
        return options;
    },
    render: function(){
        return (<div className="filter">
                    <div className="form-group">
                        <label htmlFor={this.props.id}>Filter By {this.props.type}</label>
                        <Select onchange={this.props.changeHandler}
                                id={this.props.id}
                                options={this.getOptions()}/>
                    </div>
                </div>)
    }
});

module.exports = Filter;