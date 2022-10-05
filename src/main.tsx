import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const divRoot = document.getElementById('root')

ReactDOM.createRoot(divRoot).render(
  <React.StrictMode>
    <App />
    {/* <h1>Kaizen</h1> */}
  </React.StrictMode>
)
