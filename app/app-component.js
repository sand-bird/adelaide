import React from 'react'
import ReactDOM from 'react-dom'
import Game from './src/game'
import Sound from 'react-sound'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import functional from 'react-functional'

import GameScreenContainer from './gamescreen-container'

const AppComponent = ({screen, handleKeyDown, handleClick, handleRightClick}) => { 
  return (
    <div id="app" tabIndex={0} onKeyDown={handleKeyDown} onClick={handleClick} onContextMenu={handleRightClick} ref="app">
      <ReactCSSTransitionGroup 
        transitionName="picture" 
        transitionAppearTimeout={1000} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={true}
      >
        { 
          screen == 'MENU' ? <MenuScreen/> : 
          screen == 'GAME' ? <GameScreenContainer/> : 
          <div id="displayerror">SOMETHING WENT WRONG...</div>
        }
      </ReactCSSTransitionGroup>
    </div>
  )
}

const options = {
  componentDidMount: (props, refs) => 
    ReactDOM.findDOMNode(refs.app).focus()
}

const MenuScreen = () => {
  return (
    <div className="menu" />
  )
}

export default functional(AppComponent, options)
