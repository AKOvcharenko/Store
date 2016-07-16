var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Error = React.createClass({
    render: function(){
        return (<div className="error-page col-sm-12">
                    <p className="text-center">404</p>
                    <div className="alert alert-danger" role="alert">Something went wrong, but you still always can go <Link to="/plp"> to store.</Link></div>
                </div>)
    }
});

module.exports = Error;