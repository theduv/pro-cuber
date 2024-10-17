import clsx from 'clsx'
import { memo, useContext } from 'react'

import { Page } from '../../domain/page/Page'
import { TimesTable } from './components/TimesTable'
import { TimerPageContext } from './TimerPage.context'

const TimerPageBase = () => {
  const { time, isPressingStartingKey, isTimerRunning } =
    useContext(TimerPageContext)

  const shouldHighlightTime = isPressingStartingKey && !isTimerRunning

  return (
    <Page>
      <div className="flex items-center justify-between h-full w-full">
        <div />

        <p
          className={clsx('text-9xl ', {
            'text-green-500': shouldHighlightTime,
          })}>
          {(time / 1000).toFixed(2)}
        </p>

        <TimesTable />
      </div>
    </Page>
  )
}

export const TimerPage = memo(TimerPageBase)
