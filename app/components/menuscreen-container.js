import { connect } from 'react-redux'
import MenuScreenComponent from './menuscreen-component'
import {menuActions} from '../src/game'

const ipc = window.require('electron').ipcRenderer

const mapStateToProps = (state, ownProps) => {
  return {
    actions: menuActions,
    handleSave : () => {
      ipc.send('save-game', state.save)
    }
  }
}

const MenuScreenContainer = connect(
  mapStateToProps
)(MenuScreenComponent)

export default MenuScreenContainer
