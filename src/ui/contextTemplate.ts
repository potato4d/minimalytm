import { App, MenuItemConstructorOptions } from 'electron'

export function createContextTemplate(app: App): MenuItemConstructorOptions[] {
  return [
    {
      label: 'About this application',
      selector: 'orderFrontStandardAboutPanel:'
    } as any,
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: () => {
        app.quit()
      }
    }
  ]
}
