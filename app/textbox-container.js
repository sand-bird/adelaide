import { connect } from 'react-redux'
import TextBoxComponent from './textbox-component'
import {type, setTypeQueue} from './actions'

const newLineify = (string, interval) => {
  let lines = []
  // our starting index
  let i = 0
  // distance of space from i
  let j = 0
  while (i + interval < string.length) {
    j = string.slice(i, i + interval).lastIndexOf(" ")
    console.log("j: " + j)
    lines.push (string.slice(i, i + j))
    i += j
    console.log("i: " + i + "    j: " + j)
  }
  lines.push(string.slice(i, string.length))
  return (lines.join("\n"))
}

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.currentText,
    abort: state.typeAborted
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  
  console.log(newLineify(ownProps.text, 50))
  
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
      doHandleType(newLineify(ownProps.text, 50).split('').reverse())
    }
  }
}

const TextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextBoxComponent)

export default TextBoxContainer