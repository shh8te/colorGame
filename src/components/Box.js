import React, { PureComponent } from 'react'
import '../style.css'

class Box extends PureComponent {
  state = {
    objects: [1, 2, 3, 4],
    value: 5,
    buttonStyler: {
      backgroundColor: '#008744'
    },
    xButtonStyler: {
      backgroundColor: '#009744'
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
    for (let i = 1; i <= value; i++) {
      obj.push(last + i)
    }

    const newColumns = this.state.boxStyler.gridTemplateColumns + ' 1fr'
    const newRows = this.state.boxStyler.gridTemplateRows + ' 1fr'
    const newBoxStyler = {
      gridTemplateColumns: newColumns,
      gridTemplateRows: newRows
    }

    const colorsArr = ['#008744', '#0057e7', '#d62d20', '#ffa700', '#ffffff']
    const xColorsArr = ['#009744', '#0067e7', '#d63d20', '#ffb700', '#ffffff']
    const newButtonColorIndex = this.randomize(colorsArr.map( (elem, i) => i ))
    const newButtonColor = colorsArr[newButtonColorIndex]
    const newXButtonColor = xColorsArr[newButtonColorIndex]
    
    this.setState({
      objects: obj,
      value: newValue,
      boxStyler: newBoxStyler,
      buttonStyler: {
        backgroundColor: newButtonColor
      },
      xButtonStyler: {
        backgroundColor: newXButtonColor
      },

    })

    resultUpdate()
  }
}

export default Box
