import React from 'react'
import ActionsContainer from './actions-container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delay from 'react-delay'

const TitleScreenComponent = ({lastKey /*for debugging*/, actions}) => {
  return (
    <ReactCSSTransitionGroup 
      transitionName="title" 
      transitionAppearTimeout={5000}
      transitionAppear={true}
    >
      <div id="title">
        <div className="game-title">ADELAIDE</div>
        <Delay wait={1000}>
          <ReactCSSTransitionGroup 
            transitionName="action" 
            transitionAppearTimeout={750}
            transitionAppear={true}
          >
            <ActionsContainer actions={actions} />
          </ReactCSSTransitionGroup>
        </Delay>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default TitleScreenComponent
