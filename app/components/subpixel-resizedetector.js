/* 
measure child
if measurements found are in subpixels:
width/height: set new width/height (css rule that says .wrapper > * inherit width/height)
left/top: set margin left and top equal to opposite





*/
import React, { Component, Children, PropTypes, createElement, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import getNodeDimensions from 'get-node-dimensions'

class Subpixel extends Component {

  state = {
    dimensions: {}
  }

  _node = null
  _lastDimensions = {}

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this)

    // measure on first render
    this.measure()

    // add component to resize detector to detect changes on resize
    resizeDetector().listenTo(this._node, () => this.measure())
  }

  componentWillUnmount() {
    resizeDetector().removeAllListeners(this._node)
  }

  getDimensions(node = this._node) {
    return getNodeDimensions(node)
  }

  measure = () => {

    const dimensions = this.getDimensions(this._node)
    const isChildFunction = (typeof this.props.children === 'function')

    // determine if we need to update our callback with new dimensions or not
    ['width', 'height', 'left', 'top'].some(prop => {
      if (dimensions[prop] !== this._lastDimensions[prop]) {

        // formerly update callback. now update styles


        // store last dimensions to compare changes
        this._lastDimensions = dimensions

        // we don't need to look any further, bail out
        return true
      }
    })
  }

  render() {
    const { children } = this.props
    return (
      <div id="subpixel">{Children.only(children)}</div>
    )
  }
}

export default Subpixel