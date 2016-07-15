var React = require('react');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var actionCounter = require('./../actions/actionCounter.js');

function mapStateToProps(state) {
    return {
        counterState: state.counterState
    }
}

var Counter = React.createClass({
    determineCounterData: function(){
        
        var counterState = this.props.counterState;
        var sku = this.props.sku;
        return counterState.slice().filter(function(el){if(el.sku === sku){return true;} return false;})[0];
    },
    changeQuantity : function(event){
        var button = event.currentTarget;
        var type = button.getAttribute('data-type');
        type === 'plus' ? store.dispatch(actionCounter.counterIncrement(this.props.sku)) : store.dispatch(actionCounter.counterDecrement(this.props.sku)) ;
    },
    emptyFunc: function(){/*i created it because without onChange attr, input throw annoing notification*/},
    render: function(){
        var counterData = this.determineCounterData();
        return (<div className="counter row ">
                    <span className="col-sm-4 text-center">Quantity</span>
                    <div className="col-sm-8">
                        <button onClick={this.changeQuantity} disabled={counterData.minusDisabled} type="button" className="btn btn-primary btn-circle btn-number" data-type="minus" >
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <input type="text" onChange={this.emptyFunc}  className="text-center form-control input-number" id={this.props.sku} value={counterData.value}/>
                        <button onClick={this.changeQuantity} disabled={counterData.plusDisabled} type="button" className="btn btn-primary btn-circle btn-number" data-type="plus">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                </div>);
    }
});

Counter = ReactRedux.connect(mapStateToProps)(Counter);

module.exports = Counter;
