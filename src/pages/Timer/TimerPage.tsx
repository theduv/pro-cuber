import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'
import { TimesTable } from './components/TimesTable'

const TimerPageBase = () => {
  const { time } = useContext(TimerPageContext)

  return (
    <Page>
      <div className="flex items-center justify-between">
        <div />

        <p className="text-9xl">{(time / 1000).toFixed(2)}</p>

        <TimesTable />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
