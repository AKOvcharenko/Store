var React = require('react');
var Counter = require('./../components_common/Counter');
var Discount = require('./../components_common/Discount.jsx');

var CartItem = React.createClass({
    render: function(){
        return (<div className="cart-item">
                    <div className="mtb-10 col-sm-2">
                        <img  src={this.props.imageUrl} alt={this.props.name}/>
                    </div>
                    <div className="mtb-10 col-sm-2">
                        <h4 className="product-name">{this.props.name}</h4>
                        <span className="product-brand">{this.props.brand}</span>
                    </div>
                    <div className="col-sm-4 vertical-aligner-center">
                        <Counter sku={this.props.sku}/>
                    </div>
                    <div className="col-sm-4 mtb-10 vertical-aligner-center">
                        <div>
                            <p>Single price {this.props.price} zł</p>
                            <p>Single price {this.props.price} zł</p>
                        </div>
                        <Discount discount={this.props.discount}/>
                    </div>
                </div>);
    }
});

module.exports = CartItem;