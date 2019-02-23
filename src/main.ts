import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  screen,
  systemPreferences,
  globalShortcut
} from 'electron'
import { createMenuTemplate } from './ui/menuTemplate'
import * as offsetCalclator from './tools/offsetCalclator'
import * as PlatformResolver from './tools/platformResolver'
import { getTrayPosition, TrayPosition } from './tools/getTrayPosition'
import { getNativeIconName } from './tools/getNativeIconName'
import { createContextTemplate } from './ui/contextTemplate'
import path from 'path'
import { IPCEventNames } from './types/ipc'

app.on('ready', () => {
  let mainWindow: BrowserWindow

  mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    transparent: true,
    frame: false,
    resizable: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, './client/index.js')
    }
  })

  mainWindow.loadURL('https://music.youtube.com')

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  const tray = new Tray(
    path.join(__dirname, '../assets', getNativeIconName(systemPreferences))
  )
  const offset = offsetCalclator.getOffset()

  mainWindow.on('blur', () => {
    mainWindow.hide()
  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(createMenuTemplate(app)))

  tray.setToolTip('Minimal YouTube Music Player')

  if (PlatformResolver.isWindows()) {
    mainWindow.setPosition(0, 0)
    const trayBounds = tray.getBounds()
    const displayBounds = screen.getPrimaryDisplay().bounds

    // FIXME: 本当にprimaryDisplay?
    const trayPosition = getTrayPosition({ trayBounds, displayBounds })

    switch (trayPosition) {
      case TrayPosition.Left: {
        mainWindow.setPosition(
          trayBounds.x + trayBounds.height,
          displayBounds.height - mainWindow.getBounds().height
        )
        break
      }

      case TrayPosition.Right: {
        mainWindow.setPosition(
          trayBounds.x - mainWindow.getBounds().width - offset.x,
          displayBounds.height - mainWindow.getBounds().height
        )
        break
      }

      case TrayPosition.Top: {
        mainWindow.setPosition(
          displayBounds.width - mainWindow.getBounds().width,
          trayBounds.height
        )
        break
      }

      case TrayPosition.Bottom: {
        mainWindow.setPosition(
          displayBounds.width - mainWindow.getBounds().width,
          displayBounds.height -
            trayBounds.height -
            mainWindow.getBounds().height
        )
        break
      }
    }
  }

  tray.on('click', () => {
    if (PlatformResolver.isMacOS()) {
      mainWindow.setPosition(
        tray.getBounds().x - 375 + offset.x,
        tray.getBounds().y + tray.getBounds().height + offset.y
      )
    }
    mainWindow.show()
  })

  tray.on('right-click', () => {
    tray.popUpContextMenu(Menu.buildFromTemplate(createContextTemplate(app)))
  })

  globalShortcut.register('MediaPlayPause', () => {
    mainWindow.webContents.send(IPCEventNames.PLAY_PAUSE)
  })

  globalShortcut.register('MediaPreviousTrack', () => {
    mainWindow.webContents.send(IPCEventNames.PREV)
  })

  globalShortcut.register('MediaNextTrack', () => {
    mainWindow.webContents.send(IPCEventNames.NEXT)
  })
})
