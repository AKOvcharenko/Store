var React = require('react');
var ReactRedux = require('react-redux');

function mapStateToProps(state) {
    return {
        cartState: state.cartState
    }
}

var TotalPrice = React.createClass({
    getTotalPrice: function(){
        var summ = this.props.cartState.reduce(function(prev, current){
            var single = (current.price - current.price * current.discount / 100).toFixed(2);
            var total = (single * current.value).toFixed(2);
            var result = (parseFloat(prev) + parseFloat(total)).toFixed(2);
            return result;
        }, 0);
        return summ;
    },
    render: function(){
        return (<div className="checkout-price">
            <div className="text-right alert alert-info" role="alert">Total price <span>{this.getTotalPrice()} zł</span></div>
        </div>);
    }
});

TotalPrice = ReactRedux.connect(mapStateToProps)(TotalPrice);

module.exports = TotalPrice;
