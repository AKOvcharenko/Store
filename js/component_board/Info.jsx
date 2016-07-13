var React = require('react');
var ReactTooltip = require("react-tooltip");

var Info = React.createClass({
    getInitialState: function(){
        return {
            tooltipVisible: false
        };
    },
    tooltipInteract: function(event){
        tooltipVisible = event.type === 'mouseenter';
        this.setState({tooltipVisible:tooltipVisible});
    },
    render: function(){
        return (<div className="col-sm-6">
                    <h3 className="product-name">{this.props.name}</h3>
                    <span className="product-brand">{this.props.brand}</span>
                    <div className="product-details">
                        <span data-for="happyFace" data-tip={this.props.info}>See Details <span className="info-sign glyphicon glyphicon-info-sign"></span></span>
                        <ReactTooltip id="happyFace" place="right" type="dark" effect="float"/>
                    </div>
                </div>);
    }
});

module.exports = Info;