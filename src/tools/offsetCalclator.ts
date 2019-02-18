import * as PlatformResolver from './platformResolver'

export function getOffset(): { x: number; y: number } {
  if (PlatformResolver.isWindows()) {
    return { x: 0, y: 0 }
  }
  if (PlatformResolver.isMacOS()) {
    return { x: 20, y: 4 }
  }
  if (PlatformResolver.isLinux()) {
    return { x: 0, y: 0 }
  }
  return { x: 0, y: 0 }
}
