var React = require('react');
var CartItem = require('./CartItem');

var Cart = React.createClass({
    defineId: function(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    eachItem: function(elem){
        return (<CartItem imageUrl={elem.imageUrl}
                      name={elem.name}
                      brand={elem.brand}
                      discount={elem.discount}
                      price={elem.price}
                      key={this.defineId()}>
                </CartItem>)
    },
    render: function(){
        return (<div className="cart">
            {this.props.fullItemsList.map(this.eachItem)}
        </div>)
    }
});

module.exports = Cart;