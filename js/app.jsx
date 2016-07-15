var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Shop = require('./component_shop/Shop.jsx');
var Provider = ReactRedux.Provider;
var store = require('./store/store.js');


ReactDOM.render(<Provider store={store}><Shop/></Provider>,document.getElementById('wrapper'));

