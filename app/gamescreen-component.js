import React from 'react'
import PictureComponent from './picture-component'
import TextBoxComponent from './textbox-component'
import ActionsContainer from './actions-container'

import Typewriter from './typewriter'

const GameScreenComponent = ({text, picture, lastKey, hasNext}) => {
  return (
    <div id="game">
      < PictureComponent picture={picture} />
      <div className="text-holder">
        <TextBoxComponent text={text} />
        { hasNext ? '' : <ActionsContainer/> }
      </div>
    </div>
  )
}

export default GameScreenComponent
