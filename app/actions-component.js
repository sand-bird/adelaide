import React from 'react'
import Measure from 'react-measure'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ActionsComponent = (
    {actions, handleMouseOver, handleMouseOut, handleMeasure, currentAction, lastKey}) => {
   
  return (
    <div id="actions">
      <ul>
        <ReactCSSTransitionGroup 
          transitionName="action" 
          transitionAppearTimeout={1000} 
          transitionEnterTimeout={250}
          transitionLeaveTimeout={0} 
          transitionLeave={false}
          transitionAppear={true}
        >
        {actions.map ((action, index, actions) =>
          <Action 
            name={action.name}
            isCurrent={currentAction === index}
            onMouseOver={ () => handleMouseOver(index) }
            onMouseOut={ () => handleMouseOut() }
            onMeasure={ (d) => handleMeasure(index, d) }
            key={action.id} 
            className={"action-" + actions.length}
          />
        )}
    </ReactCSSTransitionGroup >
      </ul> 
    </div>
  )
}


const Action = ( 
    {name, isCurrent, className, enable, onMouseOver, onMouseOut, onMeasure}) => {
  
  return (
  
    <li className={className + (isCurrent ? ' current' : '')}>

        <a href="#" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</a>

    </li>
  )
}

export default ActionsComponent
