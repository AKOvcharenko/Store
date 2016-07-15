var React = require('react');
var ReactRedux = require('react-redux');
var CartItem = require('./CartItem');
var store = require('./../store/store.js');


function mapStateToProps(state) {
    return {
        cartSate: state.cartSate
    }
}

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
        debugger;
        return (<div className="cart">
            {this.props.fullItemsList.map(this.eachItem)}
        </div>)
    }
});

Cart = ReactRedux.connect(mapStateToProps)(Cart);

module.exports = Cart;