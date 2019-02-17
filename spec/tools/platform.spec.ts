import * as Platform from '../../src/tools/platform'

describe('platform.ts', () => {
  test('.isWindows()', () => {
    Platform.setCustomType('Darwin')
    expect(Platform.isWindows()).toBe(false)
    Platform.setCustomType('Windows_NT')
    expect(Platform.isWindows()).toBe(true)
  })

  test('.isMacOS()', () => {
    Platform.setCustomType('Windows_NT')
    expect(Platform.isMacOS()).toBe(false)
    Platform.setCustomType('Darwin')
    expect(Platform.isMacOS()).toBe(true)
  })

  test('.isLinux()', () => {
    Platform.setCustomType('Darwin')
    expect(Platform.isLinux()).toBe(false)
    Platform.setCustomType('Linux')
    expect(Platform.isLinux()).toBe(true)
  })
})
