var React = require('react');
var ReactRedux = require('react-redux');
var CartItem = require('./CartItem');
var store = require('./../store/store.js');
var actionAddToBasket = require('./../actions/actionAddToBasket.js');


function mapStateToProps(state) {
    return {
        cartState: state.cartState
    }
}

var Cart = React.createClass({
    componentWillMount: function(){
        debugger
        //store.dispatch(actionCounter.setPLPCounter());
    },
    shouldComponentUpdate: function(){
        debugger
        return true;
    },
    defineId: function(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;

        /*return (<div className="cart">
         {this.props.fullItemsList.map(this.eachItem)}
         </div>)*/
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
        if(this.props.cartState.length){
            return <p>Basket is fuly</p>

        }

        return <p>Basket is empty</p>
    }
});

Cart = ReactRedux.connect(mapStateToProps)(Cart);

module.exports = Cart;