import React from 'react'
import PictureComponent from './picture-component'
import TextBoxContainer from './textbox-container'
import ActionsContainer from './actions-container'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delay from 'react-delay'
import PixelAlign from './util/pixelalign'

const GameScreenComponent = ({text, picture, lastKey /*for debugging*/, showActions, textSpeed, more, style}) => {
  return ( 
    <ReactCSSTransitionGroup 
      transitionName="game" 
      transitionAppearTimeout={1000}
      transitionAppear={true}
      transitionLeaveTimeout={5000}
    >
      <div id="game" style={style}>
        < PictureComponent picture={picture} borderColor={style.color} />
        <Delay wait={1000}>
        <div>
        <div className="text-holder">
          <TextBoxContainer text={text} speed={textSpeed} more={more} />
        </div>
        
          {showActions ? 
            <Delay wait={500}>
              <ReactCSSTransitionGroup 
                transitionName="action" 
                transitionAppearTimeout={500}
                transitionAppear={true}
              >
                <ActionsContainer/>
              </ReactCSSTransitionGroup>
            </Delay> 
          : undefined }
            {more ? 
              <Delay wait={250}>
                <div className="more">
                  <PixelAlign>>></PixelAlign>
                </div>
              </Delay> : undefined }
          </div>
          </Delay>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default GameScreenComponent
