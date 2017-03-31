import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TextBoxContainer from './textbox-container'
import Delay from 'react-delay'
import PixelAlign from './util/pixelalign'

const SplashScreenComponent = () => {

  return (
      <div id="splash">
        <div className="game-title">
          <PixelAlign>ADELAIDE</PixelAlign>
        </div>
        <Delay wait={2000}>
          <ReactCSSTransitionGroup 
            transitionName="quote" 
            transitionAppearTimeout={1500}
            transitionAppear={true}
          >
            <div className="quote">
              <PixelAlign>"Magick is the science and art of causing</PixelAlign>
              <PixelAlign>change to occur in conformity with will."</PixelAlign>
              <PixelAlign>- Aleister Crowley</PixelAlign>
            </div>
          </ReactCSSTransitionGroup>
        </Delay>
      </div>
  )
}

export default SplashScreenComponent
