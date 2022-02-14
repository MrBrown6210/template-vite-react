import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import { worker } from './mocks/browser'

const MOCK_ENABLE = import.meta.env.VITE_MOCK_ENABLE
if (process.env.NODE_ENV === 'development' && MOCK_ENABLE) {
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
)
