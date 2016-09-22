import { connect } from 'react-redux'
import GameScreenComponent from './gamescreen-component'

const mapStateToProps = (state, ownProps) => {
  
  var thisText = Array.isArray(state.msg.text) ?
    state.msg.text[state.textArrayIndex] : state.msg.text
    
  var msgHasMore = Array.isArray(state.msg.text) &&
    state.textArrayIndex < state.msg.text.length - 1
  
  return {
    text: thisText,
    picture: state.picture.file,
    lastKey: state.lastKey,
    showActions: state.msg.next == null && !state.typing && !msgHasMore,
    textSpeed: state.settings.textSpeed,
    more: !state.typing && (msgHasMore || state.msg.next)
  }
}

const GameScreenContainer = connect(
  mapStateToProps
)(GameScreenComponent)

export default GameScreenContainer
