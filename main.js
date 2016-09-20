'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

require('electron-reload')(__dirname+'/public')

let mainWindow

function createWindow () {
  const browserOptions = {
    width: 646,
    height: 505,
    maximizeable: false,
    icon:'public/img/logo.png',
    resizable: false,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true
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
