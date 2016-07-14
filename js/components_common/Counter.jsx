var React = require('react');
var ReactRedux = require('react-redux');
var store = require('./../store/store.js');
var actionCounter = require('./../actions/actionCounter.js');

function mapStateToProps(state) {
    return {
        counterState: state.counterState
    }
}
debugger
var Counter = React.createClass({
    /*getInitialState: function(){
        return {
            value: 1,
            minusDisable: 'disabled',
            plusDisable: ''
        };
    },
    checkButtonsState: function(value){
        var minusState = value > 1 ? '' : 'disabled';
        var plusState = value < 99 ? '' : 'disabled';
        this.setState({minusDisable: minusState, plusDisable: plusState});
    },*/
    changeQuantity : function(event){
        var button = event.currentTarget;
        var type = button.getAttribute('data-type');
        var value = this.state.value;
        debugger;
        var state = {id:'', value: value, minusDisable: '', plusDisabled: '', increment: type === 'minus'};
        type === 'minus' ? store.dispatch(actionCounter.counterDecrement(state)) : store.dispatch(actionCounter.counterIncrement(state))
    },
    emptyFunc: function(){/*i created it because without onChange attr, input throw annoing notification*/},
    render: function(){
        debugger;
        return (<div className="counter row">
                    <span className="col-sm-4 text-center">Quantity</span>
                    <div className="col-sm-8">
                        <button onClick={this.changeQuantity} disabled={this.props.counterState.minusDisable} type="button" className="btn btn-primary btn-circle btn-number" data-type="minus" >
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <input type="text" onChange={this.emptyFunc}  className="text-center form-control input-number" value={this.props.counterState.value}/>
                        <button onClick={this.changeQuantity} disabled={this.props.counterState.plusDisable} type="button" className="btn btn-primary btn-circle btn-number" data-type="plus">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                </div>);
    }
});

Counter = ReactRedux.connect(mapStateToProps)(Counter);

module.exports = Counter;
