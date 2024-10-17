import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'

const TimerPageBase = () => {
  const { time } = useContext(TimerPageContext)

  return (
    <Page>
      <h1>Timer</h1>
      <p>{(time / 1000).toFixed(2)} seconds</p>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
