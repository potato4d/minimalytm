import * as controls from '../../src/client/controls'
import { JSDOM } from 'jsdom'

describe('client/controls.ts', () => {
  describe('playPause()' , () => {
    test('true', () => {
      const DOM = new JSDOM(`<html><body><button id="play-pause-button"></button></body></html>`)
      expect(controls.playPause(DOM.window.document)).toBe(true)
    })
    test('false', () => {
      const DOM = new JSDOM(`<html><body></body></html>`)
      expect(controls.playPause(DOM.window.document)).toBe(false)
    })
  })

  describe('prevTrack', () => {
    // test('false', () => {
    //   const DOM = new JSDOM(`<html><body></body></html>`)
    //   expect(controls.playPause(DOM.window.document)).toBe(false)
    // })
    describe('false', () => {
      const DOM = new JSDOM(`<html><body></body></html>`)
      expect(controls.prevTrack(DOM.window.document)).toBe(false)
    })
  })

  describe('nextTrack', () => {
    // test('false', () => {
    //   const DOM = new JSDOM(`<html><body></body></html>`)
    //   expect(controls.playPause(DOM.window.document)).toBe(false)
    // })
    test('false', () => {
      const DOM = new JSDOM(`<html><body></body></html>`)
      expect(controls.nextTrack(DOM.window.document)).toBe(false)
    })
  })
})
