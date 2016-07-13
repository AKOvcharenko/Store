var React = require('react');

var Discount = React.createClass({
    determineDiscountLevel: function(percent){
        var level = 'basic-discount';
        percent = parseInt(percent);
        if(percent > 24) level = 'medium-discount';
        if(percent > 49) level = 'hight-discount';
        return level;
    },
    render: function(){
        return (<div className={'pull-right discount ' + this.determineDiscountLevel(this.props.discount)}>
                    <p>{this.props.discount}%</p>
                    <span>Discount</span>
                </div>);
    }
});

module.exports = Discount;