import React, { Component, PropType } from 'react';
import './css/App.css';
import './css/react-bootstrap-table-all.min.css';
import './css/stepzilla.css';

//import StepZilla from 'react-stepzilla';
import StepZilla from './stepzilla.js'

import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.store = {
      amount: 0,
      selectedCoins: [],
      estimatedCoinCount: 0
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.store;
  }

  updateStore(update) {
    this.store = {
      ...this.store,
      ...update,
    }
  }

  render() {

    const steps =
    [
      {name: '選擇', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: '輸入金額', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: '結果',   component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ]
    return (
      <div className="App">
        <div className='step-progress'>
          <StepZilla steps={steps} stepsNavigation={false} />
        </div>
      </div>
    );
  }
}

export default App;
