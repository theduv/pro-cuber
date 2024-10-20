import { SquareColors } from '../../lib/types/cube'

import { memo } from 'react'

import { cva } from '../../../styled-system/css'

export const squareRecipe = cva({
  base: {
    height: '8px',
    width: '8px',
  },
  variants: {
    color: {
      W: { backgroundColor: 'neutral.50' },
      R: { backgroundColor: 'error.500' },
      B: { backgroundColor: 'info.500' },
      Y: { backgroundColor: 'warning.500' },
      O: { backgroundColor: 'amber.600' },
      G: { backgroundColor: 'success.500' },
    },
    size: {
      small: {
        height: '4px',
        width: '4px',
      },
      medium: {
        height: '8px',
        width: '8px',
      },
      large: {
        height: '16px',
        width: '16px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

type SquareProps = {
  color: SquareColors
}

export const SquareBase = ({ color }: SquareProps) => {
  return <div className={squareRecipe({ color })} />
}

export const Square = memo(SquareBase)
