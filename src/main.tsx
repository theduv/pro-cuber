import { createRoot } from 'react-dom/client'

import { AppRouter } from './router/router'

import './index.css'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(<AppRouter />)
} else {
  console.error('Failed to find the root element')
}
