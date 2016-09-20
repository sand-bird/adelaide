import { connect } from 'react-redux'
import InputHandlerComponent from './inputhandler-component'

const mapStateToProps = (state, ownProps) => {
  return {
    key: state.game.key,
    text: state.game.message.text,
    picture: state.game.picture.file
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleMouseOver: (id) => {
      dispatch(setCurrentAction(id))
    },
    handleMouseOut: () => {
      dispatch(removeCurrentAction())
    }
  }
}

const InputHandlerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputHandlerComponent)

export default InputHandlerContainer
