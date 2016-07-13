var React = require('react');
var Select = require('./../components_common/Select.jsx');

var Sort = React.createClass({
    options: function(){
       return ['Select a method', 'Alphabetically', 'By Brand']
    },
    render: function(){
        return (<div className="sort">
                    <div className="form-group">
                        <label htmlFor={this.props.id}>Sort by</label>
                        <Select onchange={this.props.changeHandler}
                                id={this.props.id}
                                options={this.options()}/>
                    </div>
                </div>)
    }
});

module.exports = Sort;