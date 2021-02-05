import * as React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'

import { App } from "./App"
console.log('app', App)

render(
  <App />,
  document.querySelector('#root')
)
