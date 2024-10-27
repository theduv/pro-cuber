import { describe, expect, it } from 'vitest'

import { solvedCube } from '../data/samples'
import {
  cubeMovementB,
  cubeMovementD,
  cubeMovementF,
  cubeMovementL,
  cubeMovementR,
  cubeMovementU,
  scrambleCube,
} from './cube'

describe('cubeMovementU', () => {
  it('should rotate the U face clockwise', () => {
    const newCube = cubeMovementU(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
      ],
      L: [
        ['G', 'G', 'G'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      F: [
        ['R', 'R', 'R'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
      ],
      R: [
        ['B', 'B', 'B'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
      ],
      B: [
        ['O', 'O', 'O'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
      ],
      D: [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
      ],
    })
  })
})

describe('cubeMovementR', () => {
  it('should rotate the R face clockwise', () => {
    const newCube = cubeMovementR(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'G'],
        ['W', 'W', 'G'],
        ['W', 'W', 'G'],
      ],
      L: [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      F: [
        ['G', 'G', 'Y'],
        ['G', 'G', 'Y'],
        ['G', 'G', 'Y'],
      ],
      R: [
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
      ],
      B: [
        ['W', 'B', 'B'],
        ['W', 'B', 'B'],
        ['W', 'B', 'B'],
      ],
      D: [
        ['Y', 'Y', 'B'],
        ['Y', 'Y', 'B'],
        ['Y', 'Y', 'B'],
      ],
    })
  })
})

describe('cubeMovementF', () => {
  it('should rotate the F face clockwise', () => {
    const newCube = cubeMovementF(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['O', 'O', 'O'],
      ],
      L: [
        ['O', 'O', 'Y'],
        ['O', 'O', 'Y'],
        ['O', 'O', 'Y'],
      ],
      F: [
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
      ],
      R: [
        ['W', 'R', 'R'],
        ['W', 'R', 'R'],
        ['W', 'R', 'R'],
      ],
      B: [
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
      ],
      D: [
        ['R', 'R', 'R'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
      ],
    })
  })
})

describe('cubeMovementL', () => {
  it('should rotate the L face clockwise', () => {
    const newCube = cubeMovementL(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['B', 'W', 'W'],
        ['B', 'W', 'W'],
        ['B', 'W', 'W'],
      ],
      L: [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      F: [
        ['W', 'G', 'G'],
        ['W', 'G', 'G'],
        ['W', 'G', 'G'],
      ],
      R: [
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
      ],
      B: [
        ['B', 'B', 'Y'],
        ['B', 'B', 'Y'],
        ['B', 'B', 'Y'],
      ],
      D: [
        ['G', 'Y', 'Y'],
        ['G', 'Y', 'Y'],
        ['G', 'Y', 'Y'],
      ],
    })
  })
})

describe('cubeMovementB', () => {
  it('should rotate the B face clockwise', () => {
    const newCube = cubeMovementB(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['R', 'R', 'R'],
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
      ],
      L: [
        ['W', 'O', 'O'],
        ['W', 'O', 'O'],
        ['W', 'O', 'O'],
      ],
      F: [
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
      ],
      R: [
        ['R', 'R', 'Y'],
        ['R', 'R', 'Y'],
        ['R', 'R', 'Y'],
      ],
      B: [
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
      ],
      D: [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['O', 'O', 'O'],
      ],
    })
  })
})

describe('cubeMovementD', () => {
  it('should rotate the D face clockwise', () => {
    const newCube = cubeMovementD(solvedCube)

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
      ],
      L: [
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
        ['B', 'B', 'B'],
      ],
      F: [
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
        ['O', 'O', 'O'],
      ],
      R: [
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
        ['G', 'G', 'G'],
      ],
      B: [
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
        ['R', 'R', 'R'],
      ],
      D: [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
      ],
    })
  })
})

describe('scrambleCube', () => {
  it('should return a cube after a PLL T', () => {
    const newCube = scrambleCube(
      solvedCube,
      "R U R' U' R' F R2 U' R' U' R U R' F'",
    )

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
        ['W', 'W', 'W'],
      ],
      L: [
        ['O', 'R', 'O'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      F: [
        ['G', 'G', 'R'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
      ],
      R: [
        ['B', 'O', 'G'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
      ],
      B: [
        ['R', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
      ],
      D: [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
      ],
    })
  })

  it('should return the correct cube after an OLL', () => {
    const newCube = scrambleCube(solvedCube, "R2 D R' U2 R D' R' U2 R'")

    expect(newCube).toEqual({
      U: [
        ['W', 'W', 'G'],
        ['W', 'W', 'W'],
        ['G', 'W', 'W'],
      ],
      L: [
        ['O', 'O', 'R'],
        ['O', 'O', 'O'],
        ['O', 'O', 'O'],
      ],
      F: [
        ['W', 'G', 'R'],
        ['G', 'G', 'G'],
        ['G', 'G', 'G'],
      ],
      R: [
        ['B', 'R', 'W'],
        ['R', 'R', 'R'],
        ['R', 'R', 'R'],
      ],
      B: [
        ['O', 'B', 'B'],
        ['B', 'B', 'B'],
        ['B', 'B', 'B'],
      ],
      D: [
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
        ['Y', 'Y', 'Y'],
      ],
    })
  })

  it('should return the correct cube after a random alg', () => {
    const newCube = scrambleCube(solvedCube, 'B2 R2 U2 F2 D2 L2 B')

    expect(newCube).toEqual({
      U: [
        ['O', 'R', 'R'],
        ['W', 'W', 'W'],
        ['Y', 'Y', 'Y'],
      ],
      L: [
        ['W', 'R', 'R'],
        ['W', 'O', 'R'],
        ['W', 'R', 'O'],
      ],
      F: [
        ['G', 'G', 'G'],
        ['B', 'G', 'G'],
        ['B', 'B', 'B'],
      ],
      R: [
        ['O', 'O', 'Y'],
        ['O', 'R', 'Y'],
        ['R', 'O', 'Y'],
      ],
      B: [
        ['B', 'G', 'G'],
        ['B', 'B', 'G'],
        ['B', 'B', 'G'],
      ],
      D: [
        ['W', 'W', 'W'],
        ['Y', 'Y', 'Y'],
        ['R', 'O', 'O'],
      ],
    })
  })

  it('should return the correct cube after a random alg', () => {
    const newCube = scrambleCube(
      solvedCube,
      "B2 R' F2 D2 F' D2 B' R2 U2 F2 R2 B' L2 R2 U' B' U' L2 B' L' B2",
    )

    expect(newCube).toEqual({
      U: [
        ['B', 'W', 'R'],
        ['G', 'W', 'Y'],
        ['O', 'R', 'G'],
      ],
      L: [
        ['O', 'Y', 'Y'],
        ['W', 'O', 'B'],
        ['R', 'W', 'G'],
      ],
      F: [
        ['G', 'W', 'Y'],
        ['Y', 'G', 'G'],
        ['O', 'B', 'W'],
      ],
      R: [
        ['R', 'O', 'Y'],
        ['O', 'R', 'R'],
        ['O', 'O', 'R'],
      ],
      B: [
        ['B', 'O', 'Y'],
        ['G', 'B', 'G'],
        ['W', 'Y', 'W'],
      ],
      D: [
        ['W', 'R', 'B'],
        ['B', 'Y', 'B'],
        ['G', 'R', 'B'],
      ],
    })
  })
})
