import { css } from '../../../styled-system/css'
import { Token, token } from '../../../styled-system/tokens'
import { SQUARE_COLORS } from '../../lib/types/cube'

const COLOR_MAP: Record<SQUARE_COLORS, string> = {
  [SQUARE_COLORS.W]: token('colors.neutral.50'),
  [SQUARE_COLORS.R]: token('colors.error.500'),
  [SQUARE_COLORS.B]: token('colors.info.500'),
  [SQUARE_COLORS.Y]: token('colors.warning.500'),
  [SQUARE_COLORS.O]: token('colors.amber.500'),
  [SQUARE_COLORS.G]: token('colors.success.500'),
}

export const mainContainer = (color: SQUARE_COLORS) =>
  css({
    backgroundColor: COLOR_MAP[color],
    height: '8px',
    width: '8px',
  })
