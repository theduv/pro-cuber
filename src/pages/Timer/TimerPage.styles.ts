import { css } from '../../../styled-system/css'

export const mainContainer = css({
  width: 'full',
  height: 'full',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
})

export const scrambleContainer = css({
  fontSize: 'xl',
  fontWeight: 'semi-bold',
  marginBottom: 4,
})

export const scrambleCard = css({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '32px',
  borderWidth: '1px',
  borderRadius: 'md',
  backgroundColor: 'neutral.800',
  borderColor: 'neutral.700',
  boxShadow: '0 8px 12px rgba(125, 125, 125, 0.1)',
})
