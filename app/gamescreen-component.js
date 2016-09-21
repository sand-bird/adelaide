import React from 'react'
import PictureComponent from './picture-component'
import TextBoxContainer from './textbox-container'
import ActionsContainer from './actions-container'
import {VelocityTransitionGroup} from 'velocity-react'

const GameScreenComponent = ({text, picture, lastKey, showActions, textSpeed}) => {
  return ( 
    <div id="game">
      < PictureComponent picture={picture} />
      <div className="text-holder">
        <TextBoxContainer text={text} speed={textSpeed} />
      </div>
        {showActions ? <ActionsContainer/> : undefined }
    </div>
  )
}

export default GameScreenComponent
