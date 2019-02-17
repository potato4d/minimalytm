import { app, BrowserWindow, Menu, Tray } from 'electron'
import { createMenuTemplate } from './ui/menuTemplate'
import path from 'path'

app.on('ready', () => {
  let mainWindow: BrowserWindow

  mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    transparent: true,
    frame: false,
    resizable: false,
    show: false
  })

  mainWindow.loadURL('https://music.youtube.com')

  const tray = new Tray(path.join(__dirname, '../assets/icon_dark.png'))
  mainWindow.setPosition(tray.getBounds().x - 320 + 20, tray.getBounds().y)

  mainWindow.on('blur', () => {
    mainWindow.hide()
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate(app)))

  tray.setToolTip('Minimal YouTube Music Player')
  tray.on('click', () => {
    mainWindow.show()
  })
})
