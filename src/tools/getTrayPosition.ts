export enum TrayPosition {
  Left = 'Left',
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom'
}

interface Bounds {
  x: number
  y: number
  width: number
  height: number
}

export function getTrayPosition({
  trayBounds,
  displayBounds
}: {
  trayBounds: Bounds
  displayBounds: Bounds
}): TrayPosition {
  const isTop = trayBounds.y === 0
  if (isTop) {
    return TrayPosition.Top
  }
  const isLeft =
    trayBounds.x < displayBounds.width / 2 &&
    trayBounds.y + trayBounds.height !== displayBounds.height &&
    !isTop
  if (isLeft) {
    return TrayPosition.Left
  }
  const isRight =
    trayBounds.x > displayBounds.width / 2 &&
    trayBounds.y + trayBounds.height !== displayBounds.height &&
    !isTop
  if (isRight) {
    return TrayPosition.Right
  }
  // const isBottom = !isTop && !isRight && !isLeft
  return TrayPosition.Bottom
}
