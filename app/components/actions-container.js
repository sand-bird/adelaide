import { connect } from 'react-redux'
import ActionsComponent from './actions-component'
import {setCurrentAction, removeCurrentAction} from '../actions'
import {filterActions} from '../utils'

const mapStateToProps = (state, ownProps) => {
  
  const hasPages = state.actionPageIndex >= 0 
    && Array.isArray(state.actions[state.actionPageIndex])
  
  const actions = 
    ownProps.actions ? filterActions (ownProps.actions, state.save) : 
    hasPages ? state.actions[state.actionPageIndex] : 
    state.actions
  
  console.log(state.actionPageIndex)
  console.log(state.actions)
  console.log(actions)
  
  return {
    lastKey: state.lastKey,
    actions: actions,
    currentAction: state.currentAction,
    title: state.screen.toLowerCase(),
    hasPrev: state.actionPageIndex > 0,
    hasNext: hasPages && state.actionPageIndex < state.actions.length - 1
  }
} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMouseOver: (index) => {
      console.log("mousing over " + index)
      dispatch(setCurrentAction(index))
    },
    handleMouseOut: () => {
      dispatch(removeCurrentAction())
    }
  }
}

const ActionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsComponent)

export default ActionsContainer
