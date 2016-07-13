var React = require('react');
var Counter = require('./../components_common/Counter.jsx');
var Price = require('./price');

var PricePart = React.createClass({
    render: function(){
        return (<div className="col-sm-4 price-part">
                    <Price price={this.props.price} discount={this.props.discount}/>
                    <Counter/>
                    <div className="row text-center add-to-basket">
                        <button type="button" className="btn btn-primary col-sm-offset-3 col-sm-6 text-uppercase">add to cart</button>
                    </div>
                </div>);
    }
});

module.exports = PricePart;