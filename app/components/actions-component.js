import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ActionsComponent = (
    {actions, title, handleMouseOver, handleMouseOut, currentAction}) => {
   
  return (
    <div id={title + "-actions"} className="actions">
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
    {name, isCurrent, className, onMouseOver, onMouseOut}) => {
  
  return (
    <li className={className + (isCurrent ? ' current' : '')}>
        <span onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{name}</span>
    </li>
  )
}

export default ActionsComponent
