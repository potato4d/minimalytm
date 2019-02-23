import { ipcRenderer } from 'electron'
import * as Controls from './controls'

ipcRenderer.on('play/pause', () => {
  Controls.playPause(document)
})

ipcRenderer.on('prev', () => {
  Controls.prevTrack(document)
})

ipcRenderer.on('next', () => {
  Controls.nextTrack(document)
})
