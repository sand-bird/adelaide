import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TextBoxContainer from './textbox-container'
import Delay from 'react-delay'

const SplashScreenComponent = () => {

  return (
      <div id="splash">
        <div className="game-title">ADELAIDE</div>
        <Delay wait={3000}>
          <ReactCSSTransitionGroup 
            transitionName="quote" 
            transitionAppearTimeout={1000}
            transitionAppear={true}
          >
            <div className="quote">
              <p>"Magick is the science and art of causing</p>
              <p>change to occur in conformity with will."</p>
              <p>- Aleister Crowley</p>
            </div>
          </ReactCSSTransitionGroup>
        </Delay>
      </div>
  )
}

export default SplashScreenComponent
