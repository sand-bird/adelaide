import React from 'react'
import PictureComponent from './picture-component'
import TextBoxContainer from './textbox-container'
import ActionsContainer from './actions-container'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const GameScreenComponent = ({text, picture, lastKey, showActions, textSpeed, more}) => {
  return ( 
    <div id="game">{lastKey}
      < PictureComponent picture={picture} />
      <div className="text-holder">
        <TextBoxContainer text={text} speed={textSpeed} more={more} />
      </div>
        {showActions ? <ActionsContainer/> : undefined }
        {more ? <span className="more">>></span> : undefined }
    </div>
  )
}

export default GameScreenComponent
