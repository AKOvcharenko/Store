var React = require('react');
var ItemInfoPart = require('./itemInfoPart.jsx');
var PurchasePart = require('./pricePart.jsx');

var Item = React.createClass({
    render: function(){
        return (<div className="item">
                    <ItemInfoPart className="col-sm-8" imageUrl={this.props.imageUrl}
                                  name={this.props.name}
                                  brand={this.props.brand}
                                  info={this.props.info}
                                  number={this.props.number}
                                  discount={this.props.discount}>

                    </ItemInfoPart>
                    <PurchasePart className="col-sm-4" price={this.props.price}
                                  discount={this.props.discount}>
                    </PurchasePart>
                </div>);
    }
});

module.exports = Item;