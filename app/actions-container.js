import { connect } from 'react-redux'
import ActionsComponent from './actions-component'
import {setCurrentAction, removeCurrentAction, loadMessage} from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    lastKey: state.lastKey,
    actions: state.actions,
    currentAction: state.currentAction,
    handleMeasure: (index, d) => {
      console.log('measurements for ' + index)
      console.log(d.width)
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMouseOver: (index) => {
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
