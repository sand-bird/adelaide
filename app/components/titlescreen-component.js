import React from 'react'
import ActionsContainer from './actions-container'

const TitleScreenComponent = ({lastKey, actions}) => {
  return (
    <div id="title">{lastKey}
      <div className="game-title">ADELAIDE</div>
      
      <ActionsContainer actions={actions} />
      
    </div>
  )
}

export default TitleScreenComponent
