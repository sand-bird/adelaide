import React from 'react'

const PictureComponent = ({picture, borderColor}) => {

  var style = {
    backgroundImage: 'url(' + picture + ')',
    borderColor: borderColor
  };

  return (
    <div id="picture" style={style}/>
  )
}

export default PictureComponent
