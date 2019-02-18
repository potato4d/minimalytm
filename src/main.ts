import { app, BrowserWindow, Menu, Tray, screen } from 'electron'
import { createMenuTemplate } from './ui/menuTemplate'
import * as offsetCalclator from './tools/offsetCalclator'
import * as PlatformResolver from './tools/platformResolver'

import path from 'path'
import { createContextTemplate } from './ui/contextTemplate'

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
  const offset = offsetCalclator.getOffset()

  if (PlatformResolver.isMacOS()) {
    mainWindow.setPosition(
      tray.getBounds().x - 375 + offset.x,
      tray.getBounds().y + tray.getBounds().height + offset.y
    )
  }

  mainWindow.on('blur', () => {
    mainWindow.hide()
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate(app)))

  tray.setToolTip('Minimal YouTube Music Player')

  if (PlatformResolver.isWindows()) {
    mainWindow.setPosition(
      0,
      0
    )
    const trayBounds = tray.getBounds()
    const displayBounds = screen.getPrimaryDisplay().bounds
    const isTop = trayBounds.y === 0
    const isLeft =
      trayBounds.x < displayBounds.width / 2 &&
      trayBounds.y + trayBounds.height !== displayBounds.height &&
      !isTop
    const isRight =
      trayBounds.x > displayBounds.width / 2 &&
      trayBounds.y + trayBounds.height !== displayBounds.height &&
      !isTop
    const isBottom = !isTop && !isRight && !isLeft

    // FIXME: 本当にprimaryDisplay?
    if (isLeft) {
      mainWindow.setPosition(
        trayBounds.x + trayBounds.height,
        displayBounds.height - mainWindow.getBounds().height
      )
    } else if (isRight) {
      mainWindow.setPosition(
          trayBounds.x -
          mainWindow.getBounds().width -
          offset.x,
        displayBounds.height - mainWindow.getBounds().height
      )
    } else if (isTop) {
      mainWindow.setPosition(
        displayBounds.width - mainWindow.getBounds().width,
        trayBounds.height
      )
    } else if (isBottom) {
      mainWindow.setPosition(
        displayBounds.width - mainWindow.getBounds().width,
        displayBounds.height - trayBounds.height - mainWindow.getBounds().height
      )
    }
  }

  tray.on('click', () => {
    mainWindow.show()
  })

  tray.on('right-click', () => {
    tray.popUpContextMenu(Menu.buildFromTemplate(createContextTemplate(app)))
  })
})
