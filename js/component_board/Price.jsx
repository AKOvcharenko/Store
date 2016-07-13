var React = require('react');

var Price = React.createClass({
    getSlicedPrice: function(){
        return (this.props.price - this.props.price * this.props.discount / 100).toFixed(2)
    },
    render: function(){
        return (<div className="price-wrapper row">
                    {this.props.discount !== "0" ? <div className="old-price col-xs-6 text-left">
                                                <span>Old Price</span>
                                                <p><del>{this.props.price} zł</del></p>
                                           </div> : null }
                    <div className="new-price col-xs-6 text-right pull-right">
                        <span>Current Price</span>
                        <p>{this.getSlicedPrice()} zł</p>
                    </div>

                </div>);
    }
});

module.exports = Price;