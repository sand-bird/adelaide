import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import AppContainer from './components/app-container'

console.log(localStorage)

var defaultState = {
  msg: {},
  picture: {},
  actions: [],
  lastActions: [],
  currentAction: 0,
  lastCurrentAction: 0,
  currentText: '',
  textArrayIndex: -1,
  typing: false,
  typeQueue: [],
  lastKey: '',
  screen: 'TITLE',

  save: {
    msg: 'first',
    pic: 'bedroom',
    actns: ['yeah'],
    flags: ['hasSave']
  },

  settings: {
    textSpeed: 30,
    textWidth: 48,
    textLines: 4
  }
};

var store = createStore(reducers, defaultState)

render (
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("content")
)
