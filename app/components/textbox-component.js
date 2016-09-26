import React from 'react'
import functional from 'react-functional'

const TextBoxComponent = ({text, typing, handleType, more}) => {
  return (
    <div id="textbox">
      {text.split("\n").map( (line, index, text) => 
        <p key={index}>{line}</p>
      )}
    </div>
  )
}

const options = {
  componentDidMount: (props, refs) =>  {
    if (props.text === '') props.handleType(props.more)
  }, 
  componentDidUpdate: (props, prevProps, refs) => { 
    if (props.text === '') props.handleType(props.more)
  }, 
}

export default functional(TextBoxComponent, options)	
