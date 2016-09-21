import React from 'react'
import Typist from 'react-typist'
import functional from 'react-functional'
import Measure from 'react-measure'

const TextBoxComponent = ({text, typing, handleType}) => {
  return (
      <div id="textbox">
        {text.split("\n").map( (line, index, text) => 
          <p key={index}>{line}</p>
        )}
      </div>
  )
}

const options = {
  componentDidMount: (props, refs) =>  
    props.handleType(), 
  componentDidUpdate: (props, prevProps, refs) => { 
    if (props.text === '') props.handleType()
  }, 
}

export default functional(TextBoxComponent, options)	