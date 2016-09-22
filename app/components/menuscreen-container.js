import { connect } from 'react-redux'
import MenuScreenComponent from './menuscreen-component'

const ipc = window.require('electron').ipcRenderer

const mapStateToProps = (state, ownProps) => {
  return {
    lastKey: state.lastKey,
    handleSave : () => {
      ipc.send('save-game', state.save)
    }
  }
}

const MenuScreenContainer = connect(
  mapStateToProps
)(MenuScreenComponent)

export default MenuScreenContainer
