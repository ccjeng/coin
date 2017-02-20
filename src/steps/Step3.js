'use strict';

import React, { Component, PropTypes } from 'react';


function printAry(ary) {

  let strAry ='';
  for (let i = 0; i < ary.length; i++) {
    strAry = strAry + ary[i] + ', ';
  }

  //console.log(strAry);
  return strAry;
};

function generateCoinArray(ary) {

  let newAry = [999999999,999999999,999999999,999999999,999999999,999999999,999999999];

  for (let i = 0; i < ary.length; i++) {

    switch(ary[i]) {
      case 1:
        newAry[0] = 1;
        break;
      case 5:
        newAry[1] = 5;
        break;
      case 10:
        newAry[2] = 10;
        break;
      case 50:
        newAry[3] = 50;
        break;  
      case 100:
        newAry[4] = 100;
        break;  
      case 500:
        newAry[5] = 500;
        break;  
      case 1000:
        newAry[6] = 1000;
        break;                                    
      default:
    } 
  }

  return newAry;
};

let resultAry = [];
let resultString = '';
function generateCombinations(total, coins) {

    //let coins = [1,5,10,50,100,500,1000];
    let count = 0;

    for (let a = 0; a <= total/coins[coins.length-7]; a++) {
      for (let b = 0; b <= total/coins[coins.length-6]; b++) {
        for (let c = 0; c <= total/coins[coins.length-5]; c++) {
          for (let d = 0; d <= total/coins[coins.length-4]; d++) {
            for (let e = 0; e <= total/coins[coins.length-3]; e++) {
              for (let f = 0; f <= total/coins[coins.length-2]; f++) {    
                for (let g = 0; g <= total/coins[coins.length-1]; g++) {    
                  let z = a*coins[coins.length-7] + b*coins[coins.length-6] + 
                          c*coins[coins.length-5] + d*coins[coins.length-4] + 
                          e*coins[coins.length-3] + f*coins[coins.length-2] +
                          g*coins[coins.length-1];
                  if(z == total) {        
                    count++;
                    let ary = [];
                    ary.push(a);
                    ary.push(b);
                    ary.push(c);
                    ary.push(d);
                    ary.push(e);
                    ary.push(f);
                    ary.push(g);
                    console.log(a+'-'+b+'-'+c+'-'+d+'-'+e+'-'+f+'-'+g);
                    resultString = resultString + a+'-'+b+'-'+c+'-'+d+'-'+e+'-'+f+'-'+g + ', ';
                    resultAry.push(ary);
                  } else if (z > total) {
                    break;
                  }
                }  
              }
            }
          }
        }
      }
    }
    
    //console.log('resultAry.length =' + resultAry.length);
    console.log(count);
    //return count;
};

let strAry;

export default class Step3 extends Component {
  constructor(props) {
    super(props);

     this.state = {
      amount: props.getStore().amount,
      selectedCoins: props.getStore().selectedCoins,
      estimatedCoinCount: props.getStore().estimatedCoinCount
    };
  }

  componentWillMount() {
    const finalAry = generateCoinArray(this.props.getStore().selectedCoins);
    strAry = printAry(finalAry);
    console.log('amount = ' + this.props.getStore().amount);
    generateCombinations(this.props.getStore().amount, finalAry);

  }

  componentDidMount() {}

  componentWillUnmount() {}


  render() {
    
    return (
      <div className="step step3">
        <div className="row">
          <form id="Form" className="form-horizontal">


            <div>
              {this.props.getStore().amount}
            </div>

            <div>
              {resultString}
            </div>

          </form>
        </div>
      </div>
    )
  }
}
