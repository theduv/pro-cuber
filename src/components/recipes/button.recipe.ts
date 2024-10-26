import { cva } from '../../../styled-system/css'

export const buttonRecipe = cva({
  base: {
    backgroundColor: 'primary.700',
    cursor: 'pointer',
    padding: '4px 8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'sm',
    transition: 'background-color 0.2s',
    _hover: {
      backgroundColor: 'primary.800',
    },
  },
})
