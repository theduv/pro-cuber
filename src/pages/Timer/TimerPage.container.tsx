import { memo } from 'react'

import { TimerPage } from './TimerPage'
import { TimerPageContextProvider } from './TimerPage.context'

const TimerPageContainerBase = () => {
  return (
    <TimerPageContextProvider>
      <TimerPage />
    </TimerPageContextProvider>
  )
}

export default memo(TimerPageContainerBase)
