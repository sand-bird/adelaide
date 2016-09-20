import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import AppContainer from './app-container'
import * as actions from './actions'

var defaultState = {
  msg: {
    text: "This is a redux test message",
    id: "test1",
    next: "test2"
  },
  picture: {
    file: "./public/images/bedroom.png",
    id: "bedroom"
  },
  actions: [
    {
      name: "EXIT",
      id: "bed_exit",
      script: {msg: 'lazy', actns: ['test_sit', 'test_stand']},
      show: true
    },
    {
      name: "EXAMINE",
      id: "bed_examine",
      script: {actns: ['ex_bed_bed', 'ex_bed_computer', 'ex_bed_altar'], back: true},
      show: true
    }
  ],
  lastActions: [],
  lastKey: '',
  save: '',
  screen: 'GAME',
  currentAction: -1,
  lastCurrentAction: -1
}

var store = createStore(reducers, defaultState)

render (
  <Provider store={store}>
    <AppContainer store={store} />
  </Provider>,
  document.getElementById("content")
)
