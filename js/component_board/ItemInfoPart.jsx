var React = require('react');
var Info = require('./info');
var Discount = require('./../components_common/Discount.jsx');
var Availability = require('./availability');

var ItemInfoPart = React.createClass({
    render: function(){
        return (<div className="col-sm-8 info-part ">
                    <div className="product-info">
                        <div className="col-sm-3">
                            <img  src={this.props.imageUrl} alt={this.props.name}/>
                        </div>
                        <Info name={this.props.name} brand={this.props.brand} info={this.props.info}/>
                        {parseInt(this.props.discount) ? <Discount discount={this.props.discount}/> : null }
                    </div>
                    <Availability number={this.props.number}/>
                </div>);
    }
});

module.exports = ItemInfoPart;