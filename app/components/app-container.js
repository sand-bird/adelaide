import {connect} from 'react-redux'
import AppComponent from './app-component'
import {readKey} from '../actions'

const mapStateToProps = (state, ownProps) => {  
  return {
    options: state.optionsMenu,
    screen: state.screen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleKeyDown: (event) => {
      //event.preventDefault()
      dispatch(readKey(event.key))
    },
    handleClick: () => {
      dispatch(readKey("Enter"))
    },
    handleRightClick: () => {
      dispatch(readKey("Backspace"))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default AppContainer
