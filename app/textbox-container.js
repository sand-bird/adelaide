import { connect } from 'react-redux'
import TextBoxComponent from './textbox-component'


const mapStateToProps = (state, ownProps) => {  
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default AppContainer
