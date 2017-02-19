'use strict'
import React, { Component, PropTypes } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import d1 from '../img/d1.jpg';
import d5 from '../img/d5.jpg';
import d10 from '../img/d10.jpg';
import d50 from '../img/d50.jpg';
import d100 from '../img/d100.jpeg';
import d500 from '../img/d500.jpeg';
import d1000 from '../img/d1000.jpeg';



const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true 
};

var coins = [{ id: 1, img: d1 }
    , { id: 5, img: d5 }
    , { id: 10, img: d10 }
    , { id: 50, img: d50 }
    , { id: 100, img: d100 }
    , { id: 500, img: d500 }
    , { id: 1000, img: d1000 }];

function imageFormatter(cell, row){

      return (<img style={{height:60}} src={cell}/>);
    }

const StepOne = React.createClass ({

    
    handleRowSelect(row, isSelected, e) {
      //store.firstName = event.target.value
      //this.setState(store)  
    },
        
    render() {
        return (
        <BootstrapTable data={ coins } striped hover selectRow={ selectRowProp }>
          <TableHeaderColumn dataField='id' isKey></TableHeaderColumn>
          <TableHeaderColumn dataField='img' dataFormat={imageFormatter}></TableHeaderColumn>
        </BootstrapTable>
    )}
})

export { StepOne }
