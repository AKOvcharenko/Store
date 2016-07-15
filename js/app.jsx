var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Routing = require('./routes/routes.jsx');



ReactDOM.render(Routing,document.getElementById('wrapper'));
//ReactDOM.render(<Provider store={store}><Shop/></Provider>,document.getElementById('wrapper'));

