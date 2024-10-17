import './index.css'

import { createRoot } from 'react-dom/client'

import { AppRouter } from './router/router'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(<AppRouter />)
} else {
  console.error('Failed to find the root element')
}
