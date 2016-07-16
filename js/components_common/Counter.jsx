var React = require('react');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var actionCounter = require('./../actions/actionCounter.js');
var actionAddTobasket = require('./../actions/actionAddToBasket.js');

function mapStateToProps(state) {
    return {
        counterState: state.counterState
    }
}

var Counter = React.createClass({
    determineCounterData: function(){
        var counterState = this.props.counterState;
        var sku = this.props.sku;
        return counterState.slice().filter(function(el){return el.sku === sku;})[0];
    },
    changeQuantity : function(event){
        var button = event.currentTarget;
        var type = button.getAttribute('data-type');
        var changeBasketWith;
        type === 'plus' ?
            store.dispatch(actionCounter.counterIncrement(this.props.sku, this.props.basketCounter)) :
            store.dispatch(actionCounter.counterDecrement(this.props.sku, this.props.basketCounter)) ;
        if(this.props.basketCounter){
            changeBasketWith = type === 'plus' ? 1 : -1;
            store.dispatch(actionAddTobasket.directModify(this.props.sku, changeBasketWith));
        }
         
    },
    emptyFunc: function(){/*i created it because without onChange attr, input throw annoing notification*/},
    render: function(){
        var counterData = this.determineCounterData();
        return (<div className="counter row ">
                    <span className="col-sm-4 text-center">Quantity</span>
                    <div className="col-sm-8">
                        <button onClick={this.changeQuantity} disabled={counterData.minusDisabled} type="button" className="btn btn-primary btn-circle btn-number" data-type="minus" >
                            <span className="glyphicon glyphicon-minus"/>
                        </button>
                        <input type="text" onChange={this.emptyFunc}  className="text-center form-control input-number" id={this.props.sku} value={counterData.value}/>
                        <button onClick={this.changeQuantity} disabled={counterData.plusDisabled} type="button" className="btn btn-primary btn-circle btn-number" data-type="plus">
                            <span className="glyphicon glyphicon-plus"/>
                        </button>                        
                    </div>
                </div>);
    }
});

Counter = ReactRedux.connect(mapStateToProps)(Counter);

module.exports = Counter;
