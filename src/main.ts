import { app, BrowserWindow, Menu, Tray } from 'electron'

app.on('ready', function() {
  let mainWindow: BrowserWindow
  let isVisible = false

  mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    transparent: true,
    frame: false,
    resizable: false,
    show: false
  })

  mainWindow.loadURL('https://music.youtube.com')

  const tray = new Tray(__dirname + '/../assets/icon_dark.png')
  mainWindow.setPosition(tray.getBounds().x - 320 + 20, tray.getBounds().y)

  mainWindow.on('blur', () => {
    mainWindow.hide()
  })

  tray.setToolTip(app.getName())
  tray.on('click', () => {
    mainWindow.show()
  })
})
