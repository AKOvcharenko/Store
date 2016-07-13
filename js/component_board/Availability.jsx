var React = require('react');

var Availability = React.createClass({
    determineAvailabilityLevel:function(number){
        var level;
        number = parseInt(number);
        if(number < 49) level = 'medium-availability';
        if(number < 24) level = 'low-availability';
        return level;
    },
    render: function(){
        var divStyle = this.props.number > 99 ? {width: '100%'} : {width: this.props.number+'%'};
        return (<div className="availability-info">
                    <div className="col-sm-3 text-center">
                        <span>Availability</span>
                    </div>
                    <div className="progress col-sm-9">
                        <div style={divStyle}  className={this.determineAvailabilityLevel(this.props.number) + " progress-bar"}>
                            <span>{this.props.number}</span>
                        </div>
                    </div>
                </div>);
    }
});

module.exports = Availability;