import { connect } from 'react-redux'
import GameScreenComponent from './gamescreen-component'
import connectWithTransitionGroup from 'connect-with-transition-group'

const mapStateToProps = (state, ownProps) => {
  
  let thisText = Array.isArray(state.msg.text) ?
    state.msg.text[state.textArrayIndex] : state.msg.text
    
  let msgHasMore = Array.isArray(state.msg.text) &&
    state.textArrayIndex < state.msg.text.length - 1
    
  let style = state.dark ? {
    backgroundColor: "#030303",
    color: "#EEE",
  } : {
    backgroundColor: "#FFF",
    color: "#333",
  }
  
  return {
    text: thisText,
    picture: state.picture.file,
    lastKey: state.lastKey,
    showActions: state.msg.next == null && !state.typing && !msgHasMore,
    textSpeed: state.settings.textSpeed,
    more: !state.typing && (msgHasMore || state.msg.next),
    style: style
  }
}

const GameScreenContainer = connect(
  mapStateToProps
)(GameScreenComponent)

export default GameScreenContainer
