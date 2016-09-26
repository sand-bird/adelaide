import { connect } from 'react-redux'
import OptionsComponent from './options-component'
import {getVars} from '../utils'

const ipc = window.require('electron').ipcRenderer

const mapStateToProps = (state, ownProps) => {
  return {
    scale: getVars().scale,
    textSpeed: state.settings.textSpeed,
    handleSave : () => {
      ipc.send('save-game', state.save)
    }
  }
}

const OptionsContainer = connect(
  mapStateToProps
)(OptionsComponent)

export default OptionsContainer
