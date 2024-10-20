import { css } from '../../../../styled-system/css'

export const mainContainer = css({
  display: 'block',
  overflow: 'auto',
  height: '100%',
  backgroundColor: 'neutral.700',
})

export const tbody = css({
  display: 'block',
  overflow: 'auto',
  height: '100%',
})

export const tableHead = css({
  position: 'sticky',
  display: 'flex',
  gap: '12px',
  backgroundColor: 'neutral.800',
  top: '0',
})

export const tableRow = css({
  display: 'flex',
  justifyContent: 'space-between',
})

export const headerCell = css({
  padding: '8px',
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
