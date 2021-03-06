import React from 'react'
import ActionsContainer from './actions-container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const MenuScreenComponent = ({lastKey, actions}) => {
  return (
    <ReactCSSTransitionGroup 
      transitionName="menu" 
      transitionAppearTimeout={750}
      transitionAppear={true}
    >
      <div id="menu">{lastKey}
        <ActionsContainer actions={actions} />
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default MenuScreenComponent
