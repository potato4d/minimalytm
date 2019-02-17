import { App, MenuItemConstructorOptions } from 'electron'

export function createMenuTemplate(app: App): MenuItemConstructorOptions[] {
  return [
    {
      label: 'Minimal YouTube Music Player',
      submenu: [
        {
          label: 'About this application',
          selector: 'orderFrontStandardAboutPanel:'
        } as any,
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.quit()
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        { type: 'separator' },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          selector: 'selectAll:'
        }
      ]
    }
  ]
}
