import React from 'react'
import keydown from 'keydown'

class InputHandlerComponent extends React.Component {
  
  return (
    <div id="actions">
      <ul>
        {actions.map ((action, index, actions) =>
          <Action 
            name={action.name}
            isCurrent={currentAction === action.id}
            onMouseOver={ () => handleMouseOver(action.id) }
            onMouseOut={ () => handleMouseOut() }
            enable={action.show}
            key={index}
            className={"action-" + actions.length}
          />
        )}
      </ul>
    </div>
  )
}


const Action = (
    {name, isCurrent, className, enable, onMouseOver, onMouseOut}) => {
  return (
    <li className={className + (isCurrent ? ' current' : '')}>
      <a href="#" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</a>
    </li>
  )
}

export default ActionsComponent
