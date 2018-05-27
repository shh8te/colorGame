import React, { Component } from 'react'
import { render } from 'react-dom'
import Box from './Box'
import Timer from '../decorators/Timer.js'

class App extends Component {
  render() {
    const {
      isStarted,
      isFinished,
      time,
      start,
      result,
      resultUpdate
    } = this.props

    return isStarted ? (
      <div className='box'>
        <h1>
          find the different tone squares as much as you can for {time} sec!
        </h1>
        <Box resultUpdate={resultUpdate} />
      </div>
    ) :
      <div className='box'>
        {isFinished && <h1>
          you&#39;ve completed {result} levels
        </h1>}
        <button
          className='start'
          onClick={start}
        >
          {isFinished ? 'reSTART' : 'START'}
        </button>
      </div>
  }
}

export default Timer(App)