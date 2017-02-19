import React, { Component, PropTypes } from 'react'
import { StepOne } from './step1'
import { StepTwo } from './step2'
import { StepThree } from './step3'

const steps = 
    [
      {name: '選擇新台幣', component: <StepOne/>},
      {name: '輸入金額', component: <StepTwo/>},
      {name: '結果', component: <StepThree/>}
    ]

export { steps }