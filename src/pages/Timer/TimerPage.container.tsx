import { memo } from 'react'

import { TimerPageContextProvider } from './TimerPage.context'
import { TimerPage } from './TimerPage'

const TimerPageContainerBase = () => {
  return (
    <TimerPageContextProvider>
      <TimerPage />
    </TimerPageContextProvider>
  )
}

export default memo(TimerPageContainerBase)
