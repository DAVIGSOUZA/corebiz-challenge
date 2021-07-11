import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import App from './App'
import { GlobalProvider } from "./Global"

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);