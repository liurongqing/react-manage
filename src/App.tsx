import React, { Component } from 'react'
import { Button } from 'antd'

export class App extends Component {
  state = {
    loading: true,
    error: null,
    data: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      })

      setTimeout(() => {
        this.setState({
          error: '出错了'
        })
      }, 2000)

    }, 2000)
  }

  render() {
    const { loading } = this.state
    return <Button loading={loading}>加载中</Button>
  }
}
