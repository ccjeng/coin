'use strict';

import React, { Component, PropTypes } from 'react';


function coinCounts(total, coins){

    let cLen = coins.length,
    matrix = Array(cLen),
    mLen = matrix.length,
    prevPerms;

    for(let x = 0; x <= mLen; x++){
        matrix[x] = Array(total+1);
    }

    for(let z = 0; z <= mLen; z++){
        matrix[z][0] = 1;
    }

    //now the fun starts!
    for(let a = 1; a <= cLen; a++){

        for(let b = 1; b <= total; b++){

            matrix[0][b] = 0;
            prevPerms = matrix[a-1][b];
            prevPerms += coins[a-1] <= b ? matrix[a][b-coins[a-1]] : 0;
            matrix[a][b] = prevPerms;
        }
    }
    return matrix[cLen][total];
}


export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: props.getStore().amount,
      selectedCoins: props.getStore().selectedCoins,
      estimatedCoinCount: props.getStore().estimatedCoinCount
    };

    this._validateOnDemand = true;
    this.validationCheck = this._validationCheck.bind(this);
    this.isValidated = this._isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  _isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.getStore().amount != userInput.amount) { // only update store of something changed
          this.props.updateStore({
            ...userInput
          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }
        isDataValid = true;
    }
    else {
        // if anything fails then update the UI validation state but NOT the UI Data State
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    return isDataValid;
  }

  _validationCheck() {
    if (!this._validateOnDemand)
      return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));

  }

   _validateData(data) {

    //console.log('data.coinCount = ' + data.coinCount);
    this.props.updateStore({estimatedCoinCount:data.coinCount});

    return  {
      amountVal: (data.amount != 0), // required: anything besides N/A
      coinCount: (data.coinCount < 100)
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      amountValMsg: val.amountVal ? '' : '請輸入金額!',
      coinCountMsg: val.coinCount ? '' : '超過100種組合，請縮小條件!'
    }
    return errMsgs;
  }

  _grabUserInput() {

    var count = coinCounts(this.refs.amount.value, this.props.getStore().selectedCoins);
    console.log('count = ' + count);

    return {
      amount: this.refs.amount.value,
      coinCount : count
    };
  }


  render() {

    let notValidClasses = {};

    if (typeof this.state.amountVal == 'undefined' || this.state.amountVal) {
       notValidClasses.amountCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.amountCls = 'has-error col-md-8';
       notValidClasses.amountValGrpCls = 'val-err-tooltip';
    }

    if (typeof this.state.coinCount == 'undefined' || this.state.coinCount) {
       notValidClasses.cointCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.coinCls = 'has-error col-md-8';
       notValidClasses.coinValGrpCls = 'val-err-tooltip';
    }

    return (
    <div className="step step2 container">
      <div className="row">
        <form id="Form" className="form-inline">
          <div className="form-group">
            <input ref="amount" className="form-control" placeholder="輸入金額"
                                                defaultValue={this.state.amount}
                                                type="number" required onBlur={this.validationCheck}
                                                />
            <div className={notValidClasses.amountValGrpCls}>{this.state.amountValMsg}</div>
            <div className={notValidClasses.coinValGrpCls}>{this.state.coinCountMsg}</div>            
          </div>
        </form>
      </div>
    </div>
    )
  }
}

