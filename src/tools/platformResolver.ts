import os from 'os'

export enum Platforms {
  Win = 'Windows_NT',
  Mac = 'Darwin',
  Linux = 'Linux'
}

let type = os.type()

export function setCustomType(newType: string) {
  type = newType
}

export function isWindows() {
  return type === Platforms.Win
}

export function isMacOS() {
  return type === Platforms.Mac
}

export function isLinux() {
  return type === Platforms.Linux
}
