import { connect } from 'react-redux'
import GameScreenComponent from './gamescreen-component'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.msg.text,
    picture: state.picture.file,
    lastKey: state.lastKey,
    hasNext: state.msg.next !== null
  }
}

const GameScreenContainer = connect(
  mapStateToProps
)(GameScreenComponent)

export default GameScreenContainer
