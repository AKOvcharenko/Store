var React = require('react');
var Item = require('./Item');
var ReactRedux = require('react-redux');
var actionCounter = require('./../actions/actionCounter.js');
var store = require('./../store/store.js');

function mapStateToProps(state) {
    return {
        list: state.modifydList
    }
}

var Board = React.createClass({
    componentWillMount: function(){
        store.dispatch(actionCounter.setPLPCounter());
    },
    defineId: function(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    eachItem: function(elem){
        return (<Item imageUrl={elem.imageUrl}
                      name={elem.name}
                      brand={elem.brand}
                      info={elem.info}
                      discount={elem.discount}
                      number={elem.number}
                      price={elem.price}
                      sku={elem.sku}
                      key={this.defineId()}>
        </Item>)
    },
    render: function(){
        return (<div className="board col-sm-10">
            {this.props.list.map(this.eachItem)}
        </div>)
    }
});

Board = ReactRedux.connect(mapStateToProps)(Board);

module.exports = Board;



