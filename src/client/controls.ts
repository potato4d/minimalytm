export function playPause(document: any) {
  const btn = document.querySelector('#play-pause-button')
  if (btn) {
    btn.click()
    return true
  }
  return false
}

export function prevTrack(document: any) {
  const selectedItem = document.querySelector(
    'ytmusic-player-queue-item[selected]'
  )
  if (selectedItem) {
    const prevItem = selectedItem.previousElementSibling
    if (prevItem) {
      const prevItemPlayButton = prevItem.querySelector(
        'ytmusic-play-button-renderer'
      )
      if (prevItemPlayButton) {
        ;(prevItemPlayButton as HTMLElement).click()
        return true
      }
    }
  }
  return false
}

export function nextTrack(document: any) {
  const selectedItem = document.querySelector(
    'ytmusic-player-queue-item[selected]'
  )
  if (selectedItem) {
    const nextItem = selectedItem.nextElementSibling
    if (nextItem) {
      const nextItemPlayButton = nextItem.querySelector(
        'ytmusic-play-button-renderer'
      )
      if (nextItemPlayButton) {
        ;(nextItemPlayButton as HTMLElement).click()
        return true
      }
    }
  }
  return false
}
