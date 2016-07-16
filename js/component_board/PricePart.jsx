var React = require('react');
var ReactRedux = require('react-redux');
var Counter = require('./../components_common/Counter.jsx');
var Price = require('./price');
var store = require('./../store/store.js');
var actionAddToBasket = require('./../actions/actionAddToBasket.js');

function mapStateToProps(state) {
    return {
        counterState: state.counterState
    }
}

var PricePart = React.createClass({
    determineCounterData: function(){
        var counterState = this.props.counterState;
        var sku = this.props.sku;
        return counterState.slice().filter(function(el){if(el.sku === sku){return true;} return false;})[0];
    },
    addToBasket:function(){
        var addedItemInfo =  this.determineCounterData();
        var quantity = addedItemInfo.value;
        store.dispatch(actionAddToBasket.addToBasket(this.props.sku, quantity));
    },
    render: function(){
        return (<div className="col-sm-4 price-part">
                    <Price price={this.props.price} discount={this.props.discount}/>
                    <Counter sku={this.props.sku} />
                    <div className="row text-center add-to-basket">
                        <button onClick={this.addToBasket} type="button" className="btn btn-primary col-sm-offset-3 col-sm-6 text-uppercase">add to cart</button>
                    </div>
                </div>);
    }
});

PricePart = ReactRedux.connect(mapStateToProps)(PricePart);

module.exports = PricePart;