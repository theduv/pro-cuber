export type SquareColors = 'W' | 'R' | 'G' | 'Y' | 'B' | 'O'

export type Face = [
  [SquareColors, SquareColors, SquareColors],
  [SquareColors, SquareColors, SquareColors],
  [SquareColors, SquareColors, SquareColors],
]

export type Cube = {
  U: Face
  L: Face
  F: Face
  R: Face
  B: Face
  D: Face
}
