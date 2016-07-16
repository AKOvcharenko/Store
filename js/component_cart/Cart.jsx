var React = require('react');
var CartItem = require('./CartItem');
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

        /*imageUrl={elem.imageUrl}
         name={elem.name}
         brand={elem.brand}
         discount={elem.discount}
         price={elem.price}
         sku={elem.sku} */


    },
    eachItem: function(elem, index){
        return (<CartItem
                      sku={elem.sku}
                      key={index}>
                </CartItem>)
    },
    render: function(){
        if(this.props.cartState.length){
            return (<div className="cart row">
                        {this.props.cartState.map(this.eachItem)}
                     </div>)
        }

        return <p>Basket is empty</p>
    }
});

Cart = ReactRedux.connect(mapStateToProps)(Cart);

module.exports = Cart;