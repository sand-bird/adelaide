import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import AppContainer from './components/app-container'
require('./style.sass')

localStorage.clear()
localStorage.setItem('settings', JSON.stringify({
    textSpeed: 40,
    textWidth: 48,
    textLines: 4,
    actionsPerPage: 3
  }))

var settings = 
  {
    textSpeed: 40,
    textWidth: 48,
    textLines: 4,
    actionsPerPage: 3
  }
console.log(settings)

var defaultState = {
  msg: {},
  picture: {},
  actions: [],
  lastActions: [],
  currentAction: 0,
  lastCurrentAction: 0,
  currentText: '',
  textArrayIndex: -1,
  actionPageIndex: -1,
  typing: false,
  typeQueue: [],
  lastKey: '',
  screen: 'TITLE',
  optionsMenu: false,
  dark: true,

  save: {
    msg: 'first',
    pic: 'bedroom',
    actns: ['yeah'],
    flags: ['hasSave']
  },

  settings: settings
};

console.log(defaultState.settings)
console.log(localStorage)

var store = createStore(reducers, defaultState)

render (
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("content")
)
