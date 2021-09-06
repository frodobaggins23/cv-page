import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import AppContextProvider from './context'

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('app')
)
