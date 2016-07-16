var React = require('react');
var ReactRouter = require('react-router');
Link = ReactRouter.Link;

var Navigation = React.createClass({
    render: function(){
            return (<div className="row navigation">
                        <ul className="col-sm-10 col-sm-offset-2 nav nav-pills">
                            <li><Link to="/plp">Shop <span className="glyphicon glyphicon-globe"></span></Link></li>
                            <li><Link to="/cart">Cart <span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                        </ul>
                    </div>);
    }
});

module.exports = Navigation;
