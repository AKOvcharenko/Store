var React = require('react');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var Provider = ReactRedux.Provider;

var Shop = require('./../component_shop/Shop.jsx');
var Board = require('./../component_board/Board.jsx');
var Navigation = require('./../component_navigation/Navigation.jsx');
var Modify = require('./../component_modify/Modify.jsx');
var Cart = require('./../component_cart/Cart.jsx');

var Shop = React.createClass({
    getInitialProps: function(){
        return {
            navigation: Navigation,
            modify: Modify,
            board: Board,
            cart: Cart
        }
    },
    render: function(){
        return (
            <Provider store={store}>    
                <div  id="store" className="row">
                        {this.props.navigation}
                    <div className="row">
                        {this.props.modify}
                        {this.props.board}
                    </div>                    
                        {this.props.cart}
                </div>
            </Provider>)
    }
});

module.exports = Shop;