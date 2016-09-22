import { connect } from 'react-redux'
import TitleScreenComponent from './titlescreen-component'
import {titleActions} from '../src/game'

const ipc = window.require('electron').ipcRenderer

const mapStateToProps = (state, ownProps) => {
  return {
    lastKey: state.lastKey,
    actions: titleActions
  }
}

const TitleScreenContainer = connect(
  mapStateToProps
)(TitleScreenComponent)

export default TitleScreenContainer
