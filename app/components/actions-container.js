import { connect } from 'react-redux'
import ActionsComponent from './actions-component'
import {setCurrentAction, removeCurrentAction} from '../actions'
import {filterActions} from '../utils'

const mapStateToProps = (state, ownProps) => {
  
  const actions = filterActions (
    ownProps.actions ? ownProps.actions : state.actions, state.save
  )
  
  return {
    lastKey: state.lastKey,
    actions: actions,
    currentAction: state.currentAction,
    title: state.screen.toLowerCase()
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
