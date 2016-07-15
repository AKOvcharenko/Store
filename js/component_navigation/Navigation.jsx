var React = require('react');
var ReactRouter = require('react-router');
Link = ReactRouter.Link;

var Navigation = React.createClass({
    render: function(){
                return (<ul className="col-sm-10 col-sm-offset-2 navigation nav nav-pills">
                    <li><Link to="/plp">Shop <span className="glyphicon glyphicon-globe"></span></Link></li>
                    <li><Link to="/cart">Cart <span className="glyphicon glyphicon-shopping-cart"></span></Link></li>
                </ul>);
    }
});

module.exports = Navigation;
module.exports = Navigation;