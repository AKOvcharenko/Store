var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRedirect = ReactRouter.IndexRedirect;
var Shop = require('./../component_shop/Shop.jsx');
var Board = require('./../component_board/Board.jsx');
var Navigation = require('./../component_navigation/Navigation.jsx');
var Modify = require('./../component_modify/Modify.jsx');
var Cart = require('./../component_cart/Cart.jsx');
var Error = require('./../component_404/Error.jsx');
var Pagination = require('./../component_pagination/Pagination.jsx');



var Routing = (
    <Router>
        <Route path="/" component={Shop}>
            <IndexRedirect to="/plp" />
            <Route path="/plp" component={{navigation: Navigation, modify: Modify, board: Board, pagination: Pagination}}/>
            <Route path="/cart" component={{navigation: Navigation, cart: Cart}}/>
            <Route path="*" component={{error: Error}}/>
        </Route>
    </Router>
);

module.exports = Routing;
