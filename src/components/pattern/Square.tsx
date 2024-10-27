import { memo } from 'react'

import { SquareColors } from '../../lib/types/cube'
import { squareRecipe } from '../recipes/square.recipe'

type SquareProps = {
  color: SquareColors
}

export const SquareBase = ({ color }: SquareProps) => {
  return <div className={squareRecipe({ color, size: 'large' })} />
}

export const Square = memo(SquareBase)
