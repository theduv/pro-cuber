import { Cube, Face, Movement, Rotation, RotationModifier } from '../types/cube'

export const cubeMovementU = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { R, U, F, B, L } = newCube

  const newU: Face = [
    [U[2][0], U[1][0], U[0][0]],
    [U[2][1], U[1][1], U[0][1]],
    [U[2][2], U[1][2], U[0][2]],
  ]

  const newF: Face = [
    [R[0][0], R[0][1], R[0][2]],
    [F[1][0], F[1][1], F[1][2]],
    [F[2][0], F[2][1], F[2][2]],
  ]

  const newL: Face = [
    [F[0][0], F[0][1], F[0][2]],
    [L[1][0], L[1][1], L[1][2]],
    [L[2][0], L[2][1], L[2][2]],
  ]

  const newB: Face = [
    [L[0][0], L[0][1], L[0][2]],
    [B[1][0], B[1][1], B[1][2]],
    [B[2][0], B[2][1], B[2][2]],
  ]

  const newR: Face = [
    [B[0][0], B[0][1], B[0][2]],
    [R[1][0], R[1][1], R[1][2]],
    [R[2][0], R[2][1], R[2][2]],
  ]

  newCube.U = newU
  newCube.F = newF
  newCube.L = newL
  newCube.B = newB
  newCube.R = newR

  return newCube
}

export const cubeMovementF = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { R, U, F, L, D } = newCube

  const newF: Face = [
    [F[2][0], F[1][0], F[0][0]],
    [F[2][1], F[1][1], F[0][1]],
    [F[2][2], F[1][2], F[0][2]],
  ]

  const newU: Face = [
    [U[0][0], U[0][1], U[0][2]],
    [U[1][0], U[1][1], U[1][2]],
    [L[2][2], L[1][2], L[0][2]],
  ]

  const newL: Face = [
    [L[0][0], L[0][1], D[0][0]],
    [L[1][0], L[1][1], D[0][1]],
    [L[2][0], L[2][1], D[0][2]],
  ]

  const newD: Face = [
    [R[2][0], R[1][0], R[0][0]],
    [D[1][0], D[1][1], D[1][2]],
    [D[2][0], D[2][1], D[2][2]],
  ]

  const newR: Face = [
    [U[2][0], R[0][1], R[0][2]],
    [U[2][1], R[1][1], R[1][2]],
    [U[2][2], R[2][1], R[2][2]],
  ]

  newCube.U = newU
  newCube.F = newF
  newCube.L = newL
  newCube.D = newD
  newCube.R = newR

  return newCube
}

export const cubeMovementR = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { U, R, D, F, B } = newCube

  const newU: Face = [
    [U[0][0], U[0][1], F[0][2]],
    [U[1][0], U[1][1], F[1][2]],
    [U[2][0], U[2][1], F[2][2]],
  ]

  const newF: Face = [
    [F[0][0], F[0][1], D[0][2]],
    [F[1][0], F[1][1], D[1][2]],
    [F[2][0], F[2][1], D[2][2]],
  ]

  const newD: Face = [
    [D[0][0], D[0][1], B[2][0]],
    [D[1][0], D[1][1], B[1][0]],
    [D[2][0], D[2][1], B[0][0]],
  ]

  const newB: Face = [
    [U[2][2], B[0][1], B[0][2]],
    [U[1][2], B[1][1], B[1][2]],
    [U[0][2], B[2][1], B[2][2]],
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

export const cubeMovementD = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { R, D, F, B, L } = newCube

  const newF: Face = [
    [F[0][0], F[0][1], F[0][2]],
    [F[1][0], F[1][1], F[1][2]],
    [L[2][0], L[2][1], L[2][2]],
  ]

  const newD: Face = [
    [D[2][0], D[1][0], D[0][0]],
    [D[2][1], D[1][1], D[0][1]],
    [D[2][2], D[1][2], D[0][2]],
  ]

  const newB: Face = [
    [B[0][0], B[0][1], B[0][2]],
    [B[1][0], B[1][1], B[1][2]],
    [R[2][0], R[2][1], R[2][2]],
  ]

  const newR: Face = [
    [R[0][0], R[0][1], R[0][2]],
    [R[1][0], R[1][1], R[1][2]],
    [F[2][0], F[2][1], F[2][2]],
  ]

  const newL: Face = [
    [L[0][0], L[0][1], L[0][2]],
    [L[1][0], L[1][1], L[1][2]],
    [B[2][0], B[2][1], B[2][2]],
  ]

  newCube.F = newF
  newCube.D = newD
  newCube.B = newB
  newCube.R = newR
  newCube.L = newL

  return newCube
}

export const cubeMovementL = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { D, F, B, L, U } = newCube

  const newL: Face = [
    [L[2][0], L[1][0], L[0][0]],
    [L[2][1], L[1][1], L[0][1]],
    [L[2][2], L[1][2], L[0][2]],
  ]

  const newD: Face = [
    [F[0][0], D[0][1], D[0][2]],
    [F[1][0], D[1][1], D[1][2]],
    [F[2][0], D[2][1], D[2][2]],
  ]

  const newB: Face = [
    [B[0][0], B[0][1], D[2][0]],
    [B[1][0], B[1][1], D[1][0]],
    [B[2][0], B[2][1], D[0][0]],
  ]

  const newF: Face = [
    [U[0][0], F[0][1], F[0][2]],
    [U[1][0], F[1][1], F[1][2]],
    [U[2][0], F[2][1], F[2][2]],
  ]

  const newU: Face = [
    [B[2][2], U[0][1], U[0][2]],
    [B[1][2], U[1][1], U[1][2]],
    [B[0][2], U[2][1], U[2][2]],
  ]

  newCube.F = newF
  newCube.D = newD
  newCube.B = newB
  newCube.U = newU
  newCube.L = newL

  return newCube
}

export const cubeMovementB = (cube: Cube): Cube => {
  const newCube = { ...cube }

  const { R, D, B, L, U } = newCube

  const newB: Face = [
    [B[2][0], B[1][0], B[0][0]],
    [B[2][1], B[1][1], B[0][1]],
    [B[2][2], B[1][2], B[0][2]],
  ]

  const newU: Face = [
    [R[0][2], R[1][2], R[2][2]],
    [U[1][0], U[1][1], U[1][2]],
    [U[2][0], U[2][1], U[2][2]],
  ]

  const newD: Face = [
    [D[0][0], D[0][1], D[0][2]],
    [D[1][0], D[1][1], D[1][2]],
    [L[0][0], L[1][0], L[2][0]],
  ]

  const newR: Face = [
    [R[0][0], R[0][1], D[2][2]],
    [R[1][0], R[1][1], D[2][1]],
    [R[2][0], R[2][1], D[2][0]],
  ]

  const newL: Face = [
    [U[0][2], L[0][1], L[0][2]],
    [U[0][1], L[1][1], L[1][2]],
    [U[0][0], L[2][1], L[2][2]],
  ]

  newCube.L = newL
  newCube.D = newD
  newCube.B = newB
  newCube.R = newR
  newCube.U = newU

  return newCube
}

export const cubeMovementsMap = {
  U: cubeMovementU,
  F: cubeMovementF,
  R: cubeMovementR,
  D: cubeMovementD,
  L: cubeMovementL,
  B: cubeMovementB,
}

export const scrambleCube = (cube: Cube, scramble: string): Cube => {
  let newCube = { ...cube }

  const movements = scramble.split(' ') as Movement[]

  for (const movement of movements) {
    const [rotation, amount] = movement.split('') as [
      Rotation,
      RotationModifier,
    ]
    let numberOfRotations = 1

    if (amount === "'") {
      numberOfRotations = 3
    } else if (amount === '2') {
      numberOfRotations = 2
    }

    for (let i = 0; i < numberOfRotations; i++) {
      newCube = { ...cubeMovementsMap[rotation](newCube) }
    }
  }

  return newCube
}
