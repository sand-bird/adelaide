import React from 'react'
import ActionsContainer from './actions-container'

const MenuScreenComponent = ({lastKey, actions}) => {
  return (
    <div id="menu">{lastKey}
      <ActionsContainer actions={actions} />
    </div>
  )
}

export default MenuScreenComponent
