import { memo } from 'react'

import { Page } from '../../domain/page/Page'

const HomePage = () => {
  return (
    <Page>
      <h1>Home Page</h1>
    </Page>
  )
}

export default memo(HomePage)
