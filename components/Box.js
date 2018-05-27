import React, { PureComponent } from 'react'
import '../style.css'

class Box extends PureComponent {
  state = {
    objects: [1, 2, 3, 4],
    value: 5,
    buttonStyler: {
      backgroundColor: '#31d02e'
    },
    xButtonStyler: {
      backgroundColor: '#31bf2e'
    },
    boxStyler: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr'
    }
  }

  render() {
    const {
      objects,
      buttonStyler,
      xButtonStyler,
      boxStyler
    } = this.state

    const random = this.randomize(objects)
    const result = objects.map((item, i) => {
      return i !== random ?
        <button
          key = {i}
          className = 'square'
          style = {buttonStyler}
        /> :
        <button
          key = {i}
          className = 'square'
          onClick = {this.handleUpdate}
          style = {xButtonStyler}
        />
    })

    return (
      <div
        className = 'box'
        style={boxStyler}
      >
        {result}
      </div>
    )
  }

  randomize = (objects) => {
    const max = objects[objects.length - 1]

    const result = (max) => {
      let rand = Math.random() * (max)
      rand = Math.floor(rand)
      return rand
    }

    return result(max)
  }

  handleUpdate = () => {
    const { value } = this.state
    const { resultUpdate } = this.props
    const newValue = value + 2

    let obj = this.state.objects.concat()
    const last = obj[obj.length - 1]

    const newColumns = this.state.boxStyler.gridTemplateColumns + ' 1fr'
    const newRows = this.state.boxStyler.gridTemplateRows + ' 1fr'
    const newBoxStyler = {
      gridTemplateColumns: newColumns,
      gridTemplateRows: newRows
    }

    for (let i = 1; i <= value; i++) {
      obj.push(last + i)
    }
    
    this.setState({
      objects: obj,
      value: newValue,
      boxStyler: newBoxStyler
    })

    resultUpdate()
  }
}

export default Box
