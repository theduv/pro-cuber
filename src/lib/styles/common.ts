export const scrollbar = {
  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-track': {
    display: 'none',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'neutral.500',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'neutral.600',
  },

  '&::-webkit-scrollbar-gutter': {
    background: '#888',
    border: '3px solid #f0f0f0',
  },
}
