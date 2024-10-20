import { cva } from '../../../styled-system/css'

export const buttonRecipe = cva({
  base: {
    backgroundColor: 'primary.500',
    cursor: 'pointer',
    padding: '4px 8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'sm',
  },
})
