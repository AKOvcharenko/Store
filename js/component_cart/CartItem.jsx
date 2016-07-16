var React = require('react');
var Counter = require('./../components_common/Counter');
var Discount = require('./../components_common/Discount.jsx');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var actionCounter = require('./../actions/actionCounter.js');


function mapStateToProps(state) {
    return {
        cartState: state.cartState
    }
}

var CartItem = React.createClass({
    determineItem: function(){
        debugger;
        var list = this.props.cartState;
        var sku = this.props.sku;
        return list.filter(function(el){if(el.sku === sku){return true;} return false;})[0];
    },
    countSinglePrice: function(item){
        return (item.price - item.price * item.discount / 100).toFixed(2);
    },
    countTotalItemPrice: function(item){
        return (this.countSinglePrice(item) * item.value).toFixed(2);
    },
    render: function(){        
        var item = this.determineItem();
        return (<div className="cart-item">
                    <div className="mtb-10 col-sm-2">
                        <img  src={item.imageUrl} alt={item.name}/>
                    </div>
                    <div className="mtb-10 col-sm-2">
                        <h4 className="product-name">{item.name}</h4>
                        <span className="product-brand">{item.brand}</span>
                    </div>
                    <div className="col-sm-4 vertical-aligner-center">
                        <Counter basketCounter="true" sku={this.props.sku}/>
                    </div>
                    <div className="col-sm-4 mtb-10 vertical-aligner-center">
                        <div className="text-right price">
                            <p className="total-price">{this.countTotalItemPrice(item)} zł</p>
                            <p>Single price {this.countSinglePrice(item)} zł</p>
                        </div>
                        <Discount  discount={item.discount}/>
                    </div>
                </div>);
    }
});

CartItem = ReactRedux.connect(mapStateToProps)(CartItem);

module.exports = CartItem;