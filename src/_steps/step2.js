'use strict'
import React, { Component, PropTypes } from 'react'

const store = { email: '', emailConfirm: '' }

const StepTwo = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleAmountChanged(event) {
      store.amount = event.target.value
      this.setState(store)  
    },
    
    render() {
        return (
        <div>
            <div className="row">
            <div className="eight columns">
                <label>金額</label>
                <input className="u-full-width required" placeholder="輸入金額"
                                                type="number"
                                                onChange={this.handleAmountChanged} 
                                                value={this.state.amount}
                                                autoFocus/>
            </div>
            </div>
        </div>
    )}
})

export { StepTwo }