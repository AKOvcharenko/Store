var React = require('react');

var Counter = React.createClass({
    getInitialState: function(){
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
    },
    changeQuantity : function(event){
        var button = event.currentTarget;
        var type = button.getAttribute('data-type');
        var value = this.state.value;
        var isDecrement = type === 'minus';
        if((value > 1 && isDecrement) || (value < 99 && !isDecrement)){
            isDecrement ? value -= 1 : value += 1;
            this.checkButtonsState(value);
            this.setState({value:value});
        }
    },
    emptyFunc: function(){/*i created it because without onChange attr, input throw annoing notification*/},
    render: function(){
        return (<div className="counter row">
                    <span className="col-sm-4 text-center">Quantity</span>
                    <div className="col-sm-8">
                        <button onClick={this.changeQuantity} disabled={this.state.minusDisable} type="button" className="btn btn-primary btn-circle btn-number" data-type="minus" >
                            <span className="glyphicon glyphicon-minus"></span>
                        </button>
                        <input type="text" onChange={this.emptyFunc}  className="text-center form-control input-number" value={this.state.value}/>
                        <button onClick={this.changeQuantity} disabled={this.state.plusDisable} type="button" className="btn btn-primary btn-circle btn-number" data-type="plus">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                </div>);
    }
});

module.exports = Counter;
