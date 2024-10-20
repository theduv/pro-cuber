import './index.css'

import { StyleProvider } from '@ant-design/cssinjs'
import { createRoot } from 'react-dom/client'

import { AppRouter } from './router/router'
import { QueryClient, QueryClientProvider } from 'react-query'

const container = document.getElementById('root')

const queryClient = new QueryClient()

if (container) {
  const root = createRoot(container)
  root.render(
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
        <AppRouter />
      </StyleProvider>
    </QueryClientProvider>,
  )
} else {
  console.error('Failed to find the root element')
}
