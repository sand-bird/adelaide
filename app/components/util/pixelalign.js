// a react component that will (presumably) get rid of those pesky subpixel font alignments.
// fingers crossed for this to work
import React, { Component, Children, PropTypes, createElement, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import getNodeDimensions from 'get-node-dimensions'

class PixelAlign extends Component {
  constructor() {
    super()
    this._node = null
    this._lastDimensions = {}
    // we render with these styles first, then 
    // again with the added styles from realign()
    this.state = {
      childStyle: {
        visibility: 'hidden'
      },
      style: {
        width: 'auto',
        height: 'auto'
      }
    }
  } 

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this.refs['text'])

    // measure on first render. set a timeout so we don't measure 
    // before everything is properly in place (this will happen)
    setTimeout(() => this.measure(), 100)
  }

  getDimensions(node = this._node) {
    return getNodeDimensions(node)
  }
  
  realign(dimensions) {
    Object.keys(dimensions).forEach( key => {
      let style = this.state.style
      style['margin'] = 'auto'
      style['position'] = 'relative'
      let childStyle = this.state.childStyle
      childStyle['position'] = "absolute"
      childStyle['visibility'] = "visible"
      if (key == 'left' || key == 'top') // offsets
          childStyle[key] = Math.floor(dimensions[key]) - dimensions[key] // this will be negative
      if (key == 'width' || key == 'height') 
        style[key] = Math.ceil(dimensions[key])
      key == 'left' ? console.log("key: " + key + "    value: " + dimensions[key]) : ''
      console.log(childStyle)
      this.setState({style: style, childStyle: childStyle})
    })
  }

  measure() {
    const dimensions = this.getDimensions(this._node)
    this.realign(dimensions)
  }

  render() {
    const { children } = this.props
    return (
      <div id="subpixel" style={this.state.style} {...this.props} >
        { typeof(this.props.children) === 'string' ?
          <span ref="text" style={this.state.childStyle}>
            {this.props.children}
          </span> : 
          cloneElement(this.props.children, {
            ref: 'text',
            style: this.state.childStyle
          })
        }
      </div>
    )
  }
}

export default PixelAlign