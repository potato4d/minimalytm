import { App, MenuItemConstructorOptions } from 'electron'

export function createContextTemplate(app: App): MenuItemConstructorOptions[] {
  return [
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: () => {
        app.quit()
      }
    }
  ]
}
