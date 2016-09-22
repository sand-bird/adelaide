import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ActionsComponent = (
    {actions, title, handleMouseOver, handleMouseOut, currentAction, hasNext, hasPrev}) => {
   
  return (
    <ReactCSSTransitionGroup 
      transitionName="action" 
      transitionAppearTimeout={1000} 
      transitionEnterTimeout={250}
      transitionLeaveTimeout={0} 
      transitionLeave={false}
      transitionAppear={true}
    >
      <div id={title + "-actions"} className="actions">
        {hasPrev ? <span className="prev-actions">{'<'}</span> : undefined}
        <ul>
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
      
        </ul> 
        {hasNext ? <span className="next-actions">{'>'}</span> : undefined}
      </div>
    </ReactCSSTransitionGroup >
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
