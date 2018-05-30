import React, { Component } from 'react'

export default (OriginalComponent) => class Timer extends Component {
  state = {
    isStarted: false,
    isFinished: false,
    lvltime: 4,
    additionalTime: 5,
    result: 0
  }

  render() {
    return (
      <OriginalComponent
        {...this.props}
        start = {this.start}
        lvltime = {this.state.lvltime}
        isStarted = {this.state.isStarted}
        isFinished = {this.state.isFinished}
        result = {this.state.result}
        resultUpdate = {this.resultUpdate}
      />
    )
  }

  start = () => {
    this.setState({
      lvltime: 4,
      additionalTime: 5,
      isStarted: true,
      result: 0
    })

    const timerId = setInterval(() => {
      this.setState({
        lvltime: this.state.lvltime - 1
      })

      if (this.state.lvltime <= 0) {
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
      result: this.state.result + 1,
      additionalTime: this.state.additionalTime + 1,
      lvltime: this.state.additionalTime
    })
  }
}

