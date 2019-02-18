import * as PlatformResolver from './platformResolver'

export function getNativeIconName(
  systemPreferences: Electron.SystemPreferences
) {
  if (!PlatformResolver.isMacOS()) {
    return 'icon_dark.png'
  }
  return systemPreferences.isDarkMode() ? 'icon_dark.png' : 'icon_light.png'
}
