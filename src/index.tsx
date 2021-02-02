import { Button } from 'antd'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// console.log('R', ReactDOM)

console.log(document.querySelector('#root'));

ReactDOM.render(
  <div>
    <Button type="primary" > Primary Button </Button>
  </div>,
  document.querySelector('#root')
)
