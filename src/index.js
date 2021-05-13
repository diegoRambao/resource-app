import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './globalStyle'

ReactDOM.render(
   <Fragment>
      <GlobalStyle />
      <App />
   </Fragment>,
   document.getElementById('root')
)

reportWebVitals()
