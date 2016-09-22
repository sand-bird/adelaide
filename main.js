'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const fs = require('fs')

require('electron-reload')(__dirname+'/public')

var p = path.join(__dirname, '/', 'game.config')
fs.writeFileSync(p, "abcds")

let mainWindow

global.sharedObject = {
  someProperty: 'default value'
}

function createWindow () {
  const browserOptions = {
    width: 646,
    height: 505,
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
