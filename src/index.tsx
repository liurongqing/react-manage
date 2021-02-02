import { Button } from 'antd'
import * as React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'

render(
  <div>
    <Button type="primary" > Primary Button </Button>
  </div>,
  document.querySelector('#root')
)
