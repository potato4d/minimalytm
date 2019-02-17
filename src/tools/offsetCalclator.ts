import * as Platform from './platform'

export function getOffset(): { x: number; y: number } {
  if (Platform.isWindows()) {
    return { x: 0, y: 0 }
  }
  if (Platform.isMacOS()) {
    return { x: 4, y: 4 }
  }
  if (Platform.isLinux()) {
    return { x: 0, y: 0 }
  }
  return { x: 0, y: 0 }
}
