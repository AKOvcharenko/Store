var React = require('react');
var CartItem = require('./CartItem');
var TotalPrice = require('./TotalPrice');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var actionCounter = require('./../actions/actionCounter.js');


function mapStateToProps(state) {
    return {
        cartState: state.cartState
    }
}

var Cart = React.createClass({
    componentWillMount: function(){
        store.dispatch(actionCounter.setBPCounter(this.props.cartState));
    },
    shouldComponentUpdate: function(){
        store.dispatch(actionCounter.setBPCounter(this.props.cartState));
        return true;
    },
    defineId: function(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    eachItem: function(elem, index){
        return (<CartItem
                      sku={elem.sku}
                      key={index}>
                </CartItem>)
    },
    render: function(){
        if(this.props.cartState.length){
            return (<div className="cart container row">
                        <div className="row container">Your Cart</div>
                        {this.props.cartState.map(this.eachItem)}
                        <TotalPrice/>
                     </div>)
        }
        return (<div className="cart cart-empty container row">
                    <div className="row container">Your Cart</div>
                    <div className="alert alert-warning" role="alert">Basket is empty, but you still can try to buy something.</div>
                </div>)
    }
});

Cart = ReactRedux.connect(mapStateToProps)(Cart);

module.exports = Cart;