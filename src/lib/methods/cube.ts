import { Cube, Face } from '../types/cube'

export const CubeMovementR = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { U, R, D, F, B } = newCube

  const newU: Face = [
    [U[0][0], U[0][1], F[0][2]],
    [U[1][0], U[1][1], F[1][2]],
    [U[2][0], U[2][1], F[2][2]],
  ]

  const newF: Face = [
    [F[2][0], F[0][1], D[0][0]],
    [F[2][1], F[1][1], D[1][0]],
    [F[2][2], F[2][1], D[2][0]],
  ]

  const newD: Face = [
    [D[0][2], D[0][1], B[0][0]],
    [D[1][2], D[1][1], B[1][0]],
    [D[2][2], D[2][1], B[2][0]],
  ]

  const newB: Face = [
    [B[0][2], B[0][1], U[0][2]],
    [B[1][2], B[1][1], U[1][2]],
    [B[2][2], B[2][1], U[2][2]],
  ]

  const newR: Face = [
    [R[2][0], R[1][0], R[0][0]],
    [R[2][1], R[1][1], R[0][1]],
    [R[2][2], R[1][2], R[0][2]],
  ]

  newCube.U = newU
  newCube.F = newF
  newCube.D = newD
  newCube.B = newB
  newCube.R = newR

  return newCube
}
