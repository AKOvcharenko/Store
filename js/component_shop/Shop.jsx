var React = require('react');
var Board = require('./../component_board/Board.jsx');
var Modify = require('./../component_modify/Modify.jsx');
//var Cart = require('./../component_cart/Cart.jsx');
var data = require('./../../data.json');



var Shop = React.createClass({
    render: function(){
        return (<div  id="store">
                    <Modify filterState = {this.props.filterState} fullItemsList={data}/>
                    <Board fullItemsList={data}/>
                </div>)
    }
});

module.exports = Shop;