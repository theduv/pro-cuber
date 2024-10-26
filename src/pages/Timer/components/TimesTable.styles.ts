import { css } from '../../../../styled-system/css'
import { scrollbar } from '../../../lib/styles/common'

const BODY_CELL_HEIGHT = '3rem'

export const mainContainer = css({
  overflow: 'hidden',
  borderRadius: '8px',
  maxHeight: '100%',
  backgroundColor: 'neutral.600',
})

export const tbody = css({
  ...scrollbar, // doesnt work. I mean, it does work but not all the time
  overflowY: 'scroll',
  height: '100%',
  display: 'block',
})

export const tableHead = css({
  position: 'sticky',
  display: 'flex',
  borderTopRadius: '8px',
  backgroundColor: 'neutral.700',
  top: '0',
})

export const tableRow = css({
  display: 'flex',
  justifyContent: 'space-between',
  height: BODY_CELL_HEIGHT,
})

export const headerCell = css({
  padding: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const bodyCell = css({
  display: 'flex',
  justifyContent: 'center',
  padding: '8px',
  alignItems: 'center',
  width: '100%',
})
