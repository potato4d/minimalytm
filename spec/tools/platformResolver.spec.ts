import * as PlatformResolver from '../../src/tools/platformResolver'

describe('platformResolver.ts', () => {
  test('.isWindows()', () => {
    PlatformResolver.setCustomType('Darwin')
    expect(PlatformResolver.isWindows()).toBe(false)
    PlatformResolver.setCustomType('Windows_NT')
    expect(PlatformResolver.isWindows()).toBe(true)
  })

  test('.isMacOS()', () => {
    PlatformResolver.setCustomType('Windows_NT')
    expect(PlatformResolver.isMacOS()).toBe(false)
    PlatformResolver.setCustomType('Darwin')
    expect(PlatformResolver.isMacOS()).toBe(true)
  })

  test('.isLinux()', () => {
    PlatformResolver.setCustomType('Darwin')
    expect(PlatformResolver.isLinux()).toBe(false)
    PlatformResolver.setCustomType('Linux')
    expect(PlatformResolver.isLinux()).toBe(true)
  })
})
