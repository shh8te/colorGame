import React, { Component } from 'react'

export default (OriginalComponent) => class Timer extends Component {
  state = {
    isStarted: false,
    isFinished: false,
    time: 15,
    result: 0
  }

  render() {
    return (
      <OriginalComponent
        {...this.props}
        start = {this.start}
        time = {this.state.time}
        isStarted = {this.state.isStarted}
        isFinished = {this.state.isFinished}
        result = {this.state.result}
        resultUpdate = {this.resultUpdate}
      />
    )
  }

  start = () => {
    this.setState({
      time: 15,
      isStarted: true,
      result: 0
    })

    const timerId = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      })

      if (this.state.time <= 0) {
        clearInterval(timerId)
        this.setState({
          isStarted: false,
          isFinished: true
        })
      }
    }, 1000)
  }

  resultUpdate = () => {
    this.setState({
      result: this.state.result + 1
    })
  }
}

