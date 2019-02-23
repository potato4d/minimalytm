import { ipcRenderer } from 'electron'

ipcRenderer.on('play/pause', () => {
  // FIXME?: document.getElementById('play-pause-button') では何故かnullが返ってくる
  const btn = document.querySelector('#play-pause-button') as HTMLElement
  btn.click()
})
