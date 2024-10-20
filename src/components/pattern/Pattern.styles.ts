import { css } from '../../../styled-system/css'

export const cube = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '4px',
})

export const face = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: '2px',
})

export const line = css({
  display: 'flex',
  gap: '2px',
})

export const firstFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '1 / 2 / 2 / 3',
})

export const secondFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '2 / 1 / 3 / 2',
})

export const thirdFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '2 / 2 / 3 / 3',
})

export const fourthFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '2 / 3 / 3 / 4',
})
export const fifthFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '2 / 4 / 3 / 5',
})

export const sixthFace = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  gridArea: '3 / 2 / 4 / 3',
})

export const faceWithIndex = [
  firstFace,
  secondFace,
  thirdFace,
  fourthFace,
  fifthFace,
  sixthFace,
]
