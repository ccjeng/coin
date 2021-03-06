'use strict';

import React, { Component, PropTypes } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const d1 = process.env.PUBLIC_URL + '/img/d1.jpg';
const d5 = process.env.PUBLIC_URL + '/img/d5.jpg';
const d10 = process.env.PUBLIC_URL + '/img/d10.jpg';
const d50 = process.env.PUBLIC_URL + '/img/d50.jpg';
const d100 = process.env.PUBLIC_URL + '/img/d100.jpeg';
const d500 = process.env.PUBLIC_URL + '/img/d500.jpeg';
const d1000 = process.env.PUBLIC_URL + '/img/d1000.jpeg';

let coins = [{ id: 1, img: d1 }
    , { id: 5, img: d5 }
    , { id: 10, img: d10 }
    , { id: 50, img: d50 }
    , { id: 100, img: d100 }
    , { id: 500, img: d500 }
    , { id: 1000, img: d1000 }];



function imageFormatter(cell, row){  
      return (<img style={{height: 60}} src={cell}/>);

};


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

let ary = [];

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCoins: props.getStore().selectedCoins
    };

  }

  
  componentDidMount() {}

  componentWillUnmount() {}


  // not required as this component has no forms or user entry
  // _isValidated() {}

  render() {

    const onRowSelect = ({ id }, isSelected) => {

      if (isSelected) {
        ary.push(id);
      } else {
        ary.remove(id);
      }
      
      this.props.updateStore({selectedCoins:ary.sort()});

    };

    const onRowSelectAll = (isSelected) => {

      ary = [];

      if (isSelected) {
        for (var i = 0; i < coins.length; i++) {
          ary.push(coins[i].id);
        }
      } 

      this.props.updateStore({selectedCoins:ary.sort()});
    };

    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelect: onRowSelect,
      onSelectAll: onRowSelectAll,
      selected: ary
    };

    return (
      <div className="step step1 container">
        <div className="row">
          <form id="Form" className="form-inline">
            <div className="col-md-4 col-md-offset-4">
              <BootstrapTable data={ coins } hover selectRow={ selectRowProp }>
                  <TableHeaderColumn dataField='id' isKey width='90' hidden></TableHeaderColumn>
                  <TableHeaderColumn dataField='img' dataFormat={imageFormatter}></TableHeaderColumn>
              </BootstrapTable>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
