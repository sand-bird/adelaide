import { connect } from 'react-redux'
import TextBoxComponent from './textbox-component'
import {type, setTypeQueue} from '../actions'


const mapStateToProps = (state, ownProps) => {

  console.log("current: " + state.textArrayIndex + "      last: " + state.msg.text.length - 1)
  console.log((state.textArrayIndex < state.msg.text.length - 1).toString())
      
  return {
    text: state.currentText,
    abort: state.typeAborted,
    more: Array.isArray(state.msg.text)
        && state.textArrayIndex < state.msg.text.length - 1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const doHandleType = (array, more) => {
    let keySet = []
    
    keySet.push(
      setTimeout(() => {
        dispatch(type(array.pop(), more || array.length > 0))
        if (array.length) {
          doHandleType(array)
        }
      }, ownProps.speed)
    )
    dispatch(setTypeQueue(keySet))
  }

  return {
    handleType: (more) => {
      doHandleType(ownProps.text.split('').reverse(), more)
    }
  }
}

const TextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextBoxComponent)

export default TextBoxContainer
