import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import functional from 'react-functional'

import MenuScreenContainer from './menuscreen-container'
import GameScreenContainer from './gamescreen-container'
import TitleScreenContainer from './titlescreen-container'

const AppComponent = ({screen, handleKeyDown, handleClick, handleRightClick}) => { 
  return (
    <div id="app" ref="app"
      tabIndex={0} 
      onKeyDown={handleKeyDown} 
      onClick={handleClick} 
      onContextMenu={handleRightClick}
    >
      <ReactCSSTransitionGroup 
        transitionName="picture" 
        transitionAppearTimeout={1000} 
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={true}
      >
        { 
          screen == 'TITLE' ? <TitleScreenContainer/> : 
          screen == 'MENU' ? <MenuScreenContainer/> : 
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

export default functional(AppComponent, options)
