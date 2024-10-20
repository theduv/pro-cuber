export type SquareColors = 'W' | 'R' | 'G' | 'Y' | 'B' | 'O'

export type Movement =
  | 'U'
  | 'L'
  | 'F'
  | 'R'
  | 'B'
  | 'D'
  | "U'"
  | "L'"
  | "F'"
  | "R'"
  | "B'"
  | "D'"
  | 'U2'
  | 'L2'
  | 'F2'
  | 'R2'
  | 'B2'
  | 'D2'

export type Rotation = 'U' | 'L' | 'F' | 'R' | 'B' | 'D'

export type RotationModifier = "'" | '2' | undefined

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
