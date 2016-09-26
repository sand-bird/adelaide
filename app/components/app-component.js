import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import functional from 'react-functional'

import MenuScreenContainer from './menuscreen-container'
import GameScreenContainer from './gamescreen-container'
import TitleScreenContainer from './titlescreen-container'
import SplashScreenComponent from './splashscreen-component'

const AppComponent = ({screen, handleKeyDown, handleClick, handleRightClick}) => { 
  return (
    <div id="app" ref="app"
      tabIndex={0} 
      onKeyDown={handleKeyDown} 
      onClick={handleClick} 
      onContextMenu={handleRightClick}
    >
      { 
        screen == 'SPLASH' ? <SplashScreenComponent/> :
        screen == 'TITLE' ? <TitleScreenContainer/> : 
        screen == 'MENU' ? <MenuScreenContainer/> : 
        screen == 'GAME' ? <GameScreenContainer/> : 
        <div id="displayerror">SOMETHING WENT WRONG...</div>
      }
    </div>
  )
}

const options = {
  componentDidMount: (props, refs) => 
    ReactDOM.findDOMNode(refs.app).focus()
}

export default functional(AppComponent, options)
