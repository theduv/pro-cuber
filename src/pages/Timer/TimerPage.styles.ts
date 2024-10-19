import { css } from '../../../styled-system/css'

export const mainContainer = css({
  width: 'full',
  height: 'full',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const timerContainer = (shouldHighlightTime: boolean) =>
  css({
    fontSize: '5rem',
    color: shouldHighlightTime ? 'success.500' : 'gray.200',
  })
