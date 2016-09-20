import React from 'react'
import Measure from 'react-measure'

const ActionsComponent = (
    {actions, handleMouseOver, handleMouseOut, handleMeasure, currentAction, lastKey}) => {
  let height
  let width  
  
  return (
    <div id="actions">
      <ul>
        {actions.map ((action, index, actions) =>
          <Action 
            name={action.name}
            isCurrent={currentAction === index}
            onMouseOver={ () => handleMouseOver(index) }
            onMouseOut={ () => handleMouseOut() }
            onMeasure={ (d) => handleMeasure(index, d) }
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
    {name, isCurrent, className, enable, onMouseOver, onMouseOut, onMeasure}) => {
  
  return (
    <li className={className + (isCurrent ? ' current' : '')}>
      <Measure
        onMeasure={(d) => onMeasure(d) }
      >
        <a href="#" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</a>
      </Measure>
    </li>
  )
}

export default ActionsComponent
