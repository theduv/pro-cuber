import { memo, useContext } from 'react'

import clsx from 'clsx'

import { Page } from '../../domain/page/Page'
import { TimerPageContext } from './TimerPage.context'
import { TimesTable } from './components/TimesTable'

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
