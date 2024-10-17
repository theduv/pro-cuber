import './index.css'
import { StyleProvider } from '@ant-design/cssinjs'

import { createRoot } from 'react-dom/client'

import { AppRouter } from './router/router'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <StyleProvider layer>
      <AppRouter />
    </StyleProvider>,
  )
} else {
  console.error('Failed to find the root element')
}
