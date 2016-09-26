'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const fs = require('fs')
const ipc = electron.ipcMain

require('electron-reload')(__dirname+'/public')

var varsFile = path.join(__dirname, '/', 'vars.json')

let scale = require('./app/vars.json').scale

let mainWindow

global.sharedObject = {
  someProperty: 'default value'
}

function createWindow () {
  const browserOptions = {
    width: 324 * scale,
    height: 252 * scale,
    maximizeable: false,
    icon:'public/img/logo.png',
    resizable: false,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    useContentSize: true
  }
  
  mainWindow = new BrowserWindow(browserOptions)

  mainWindow.loadURL('file://' + __dirname + '/index.html')
  
  mainWindow.focusOnWebView()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  
}

ipc.on('resize', (event, arg) => {
  console.log(arg)
  mainWindow.setSize(324, 252)
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
