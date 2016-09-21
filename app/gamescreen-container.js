import { connect } from 'react-redux'
import GameScreenComponent from './gamescreen-component'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.msg.text,
    picture: state.picture.file,
    lastKey: state.lastKey,
    showActions: state.msg.next == null && !state.typing,
    textSpeed: state.textSpeed
  }
}

const GameScreenContainer = connect(
  mapStateToProps
)(GameScreenComponent)

export default GameScreenContainer
