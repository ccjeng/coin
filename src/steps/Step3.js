'use strict';

import React, { Component, PropTypes } from 'react';



function printAry(ary) {
  var strAry ='';
  for (var i = 0; i < ary.length; i++) {
    strAry = strAry + ary[i] + ', ';
  }

  //console.log(strAry);
  return strAry;
}

export default class Step3 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}


  render() {
    var strAry = printAry(this.props.getStore().selectedCoins);
    
    return (
      <div className="step step3">
        <div className="row">
          <form id="Form" className="form-horizontal">


            <div>
              {this.props.getStore().amount}
            </div>

            <div>
              {strAry}
            </div>

          </form>
        </div>
      </div>
    )
  }
}
