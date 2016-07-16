var React = require('react');
var ReactRedux = require('react-redux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function mapStateToProps(state) {
    return {
        cartState: state.cartState
    }
}

var Navigation = React.createClass({
    getQuantityInBasket: function(){
        return this.props.cartState.reduce(function(prev, curr){
            return prev + curr.value;
        }, 0);
    },
    render: function(){
        var quantityInBasket = this.getQuantityInBasket();
        return (<div className="row navigation">
                        <ul className="col-sm-10 col-sm-offset-2 nav nav-pills">
                            <li><Link to="/plp">Shop <span className="glyphicon glyphicon-globe"/></Link></li>
                            <li>
                                <Link to="/cart">Cart 
                                    <span className="glyphicon glyphicon-shopping-cart"/>
                                    {quantityInBasket ? <span className="basket-quantity">{quantityInBasket}</span> : null }
                                </Link>
                            </li>
                        </ul>
                    </div>);
    }
});

Navigation = ReactRedux.connect(mapStateToProps)(Navigation);

module.exports = Navigation;
