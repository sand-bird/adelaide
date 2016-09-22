import { connect } from 'react-redux'
import TextBoxComponent from './textbox-component'
import {type, setTypeQueue} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.currentText,
    abort: state.typeAborted,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const doHandleType = (array) => {
    let keySet = []
    
    keySet.push(
      setTimeout(() => {
        dispatch(type(array.pop(), array.length > 0))
        if (array.length) {
          doHandleType(array)
        }
      }, ownProps.speed)
    )
    dispatch(setTypeQueue(keySet))
  }

  return {
    handleType: () => {
      doHandleType(ownProps.text.split('').reverse())
    }
  }
}

const TextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextBoxComponent)

export default TextBoxContainer
