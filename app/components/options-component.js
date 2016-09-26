import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const OptionsComponent = ({scale, textSpeed}) => {
  return (
    <ReactCSSTransitionGroup 
      transitionName="menu" 
      transitionAppearTimeout={750}
      transitionAppear={true}
    >
      <div id="options">
        <div>SCALE: {scale}</div>
        <div>TEXT SPEED: {textSpeed}</div>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default OptionsComponent
