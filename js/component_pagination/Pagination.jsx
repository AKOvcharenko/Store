var React = require('react');
var ReactRedux = require('react-redux');
var actionFilterState = require('./../actions/actionFilterState.js');
var actionModifyList = require('./../actions/actionModifyList.js');
var store = require('./../store/store.js');
var data = require('./../../data.json');

function mapStateToProps(state) {
    return {
        list: state.modifydList,
        filterState: state.filterState
    }
}

var Pagination = React.createClass({
    getDefaultProps:function(){
        return {
            perPage: 5
        }
    },
    determineListLength: function(filterState){
        var list = data.slice();
        var functions = {
            search: function (value, item) {
                return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
            },
            filterCat: function (value, item) {
                if (!value || value === 'Select a category') return true;
                return item.category === value;
            },
            filterBrand: function (value, item) {
                if (!value || value === 'Select a brand') return true;
                return item.brand === value;
            }
        };

        for (var key in filterState){
            if(functions[key]) list = list.filter(functions[key].bind(this, filterState[key]));
        }

        return list.length;
    },
    createArray: function(){
        //this function just creates array, because i dont know how render dynamic children :'C without this trick
        function fillArrayWithNumbers(n) {
            var arr = Array.apply(null, Array(n));
            return arr.map(function (x, i) { return i });
        }
        var length = Math.ceil(this.determineListLength(this.props.filterState)/this.props.perPage);
        return fillArrayWithNumbers(length);
    },
    changePage: function(event){
        var pageNumber = event.target.getAttribute('data-page');
        store.dispatch(actionFilterState.filterApplayed('pagination', {activePage: pageNumber, perPage: this.props.perPage}));
        store.dispatch(actionModifyList(store.getState().filterState));
    },
    render: function(){
        var arr = this.createArray(); //this function just creates array, because i dont know how render dynamic children :'C without this trick
        var changePage = this.changePage;
        var activePage = parseInt(this.props.filterState.pagination.activePage);
        return arr.length > 1 ? (<div className="row text-center">
                    <ul className="pagination">
                        {arr.map(function(elem, i){
                            return <li  className={i === activePage ? 'active' : ''} key={i}><a data-page={i} onClick={changePage}>{i + 1}</a></li>
                        })}
                    </ul>
                </div>) : null;
    }
});

Pagination = ReactRedux.connect(mapStateToProps)(Pagination);

module.exports = Pagination;
