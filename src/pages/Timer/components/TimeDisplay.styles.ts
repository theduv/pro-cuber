import { css } from '../../../../styled-system/css'

export const mainContainer = (shouldHighlightTime: boolean) =>
  css({
    fontSize: '12rem',
    color: shouldHighlightTime ? 'success.500' : 'gray.200',
  })
